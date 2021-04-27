import React from 'react';
import Overview from './Overview/overview.jsx';
import Related from './Related/related.jsx';
import Reviews from './Reviews/reviews.jsx';
import QA from './QA/qa.jsx';
import helpers from './Reviews/helpers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      overview: false,
      related: false,
      qa: false,
      reviews: false,
      outfitData: [],
      colorMode: 'light',
    };

    this.getRating = this.getRating.bind(this);
    this.ratingPercentage = this.ratingPercentage.bind(this);
    this.refreshOutfit = this.refreshOutfit.bind(this);
    this.toggleColorMode = this.toggleColorMode.bind(this);

    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
  }

  componentDidMount() {
    const URL = window.location.href;
    const productID = URL.split('products/')[1].split('/')[0];
    const outfitIDs = localStorage.getItem('outfit');
    $.ajax({
      url: `/api/overview/${productID}`,
    })
      .then((responseData) => {
        this.setState({ data: responseData, show: true, overview: true });
        $.ajax({
          url: `/api/information/${productID}`,
          success: (informationData) => {
            const currentData = this.state.data;
            currentData.related = informationData.related;
            currentData.reviews = informationData.reviews;
            currentData.qa = informationData.qa;
            this.setState({
              data: currentData,
            }, () => this.getRating());
            $.ajax({
              url: '/outfit',
              type: 'POST',
              data: { outfitIDs },
              success: (outfitData) => {
                this.setState({
                  outfitData: outfitData.outfit,
                  related: true,
                  qa: true,
                  reviews: true,
                });
              },
              error: (outfitData) => {
                const outfit = { outfitInformation: [], outfitStyles: [], outfitReviews: [] };
                this.setState({
                  outfitData: outfit,
                  related: true,
                  qa: true,
                  reviews: true,
                });
              },
            });
          },
        });
      });
  }

  getRating() {
    let avgRating;
    if (Object.values(this.state.data.reviews.reviewMeta.ratings).length) {
      avgRating = helpers.averageOfRatings(this.state.data.reviews.reviewMeta.ratings);
    } else {
      avgRating = 0;
    }
    if (avgRating.toString().length === 1) {
      avgRating = `${avgRating.toString()}.0`;
    }
    this.setState({
      avgRating,
    }, () => this.ratingPercentage());
  }

  toggleColorMode() {
    const { colorMode } = this.state;
    if (colorMode === 'light') {
      this.setState({ colorMode: 'dark' });
    } else {
      this.setState({ colorMode: 'light' });
    }
  }

  ratingPercentage() {
    let percentage = this.state.avgRating / 5;
    percentage *= 100;
    this.setState({
      ratingPercentage: `${Math.round(percentage / 10) * 10}%`,
    });
  }

  refreshOutfit() {
    const outfitIDs = localStorage.getItem('outfit');
    $.ajax({
      url: '/outfit',
      type: 'POST',
      data: { outfitIDs },
      success: (outfitData) => {
        this.setState({
          outfitData: outfitData.outfit,
          related: true,
          qa: true,
          reviews: true,
        });
      },
      error: (outfitData) => {
        const outfit = { outfitInformation: [], outfitStyles: [], outfitReviews: [] };
        this.setState({
          outfitData: outfit,
          related: true,
          qa: true,
          reviews: true,
        });
      },
    });
  }

  addToOutfit(id) {
    const { outfitData } = this.state;
    console.log(outfitData);
    const {
      relatedIds, relatedInformation, relatedStyles, relatedReviews,
    } = this.state.data.related;
    const string = localStorage.getItem('outfit');
    console.log('add start:', string.split(','));
    this.currentOutfit = string.split(',');
    if (this.currentOutfit[0] !== '' && this.currentOutfit.indexOf(id.toString()) === -1) {
      this.currentOutfit.push(id.toString());
      localStorage.setItem('outfit', this.currentOutfit);
      const productIndex = relatedIds.indexOf(id);
      const newOutfitData = outfitData;
      const {
        outfitInformation, outfitStyles, defaultStyle, outfitReviews,
      } = newOutfitData;
      for (let i = 0; i < relatedStyles[productIndex].results.length; i += 1) {
        if (relatedStyles[productIndex].results[i]['default?'] === true) {
          outfitInformation.push(relatedInformation[productIndex]);
          outfitStyles.push(relatedStyles[productIndex]);
          outfitReviews.push(relatedReviews[productIndex]);
          break;
        } else if (i === relatedStyles[productIndex].results.length - 1
          && newOutfitData[productIndex] === undefined) {
          outfitInformation.push(relatedInformation[productIndex]);
          outfitStyles.push(relatedStyles[productIndex]);
          outfitReviews.push(relatedReviews[productIndex]);
        }
      }
      this.setState({
        outfitData: newOutfitData,
      });
    } else if (this.currentOutfit[0] === '') {
      localStorage.setItem('outfit', id.toString());
      const productIndex = relatedIds.indexOf(id);
      const newOutfitData = {
        outfitInformation: [],
        outfitStyles: [],
        outfitReviews: [],
      };
      const { outfitInformation, outfitStyles, outfitReviews } = newOutfitData;
      for (let i = 0; i < relatedStyles[productIndex].results.length; i += 1) {
        if (relatedStyles[productIndex].results[i]['default?'] === true) {
          outfitInformation.push(relatedInformation[productIndex]);
          outfitStyles.push(relatedStyles[productIndex]);
          outfitReviews.push(relatedReviews[productIndex]);
          break;
        } else if (i === relatedStyles[productIndex].results.length - 1
          && newOutfitData[productIndex] === undefined) {
          outfitInformation.push(relatedInformation[productIndex]);
          outfitStyles.push(relatedStyles[productIndex]);
          outfitReviews.push(relatedReviews[productIndex]);
        }
      }
      this.setState({
        outfitData: newOutfitData,
      });
    }
  }

  removeFromOutfit(id) {
    const { outfitData } = this.state;
    const string = localStorage.getItem('outfit');
    this.currentOutfit = string.split(',');
    if (this.currentOutfit.indexOf(id.toString()) !== -1) {
      this.currentOutfit.splice(this.currentOutfit.indexOf(id.toString()), 1);
      localStorage.setItem('outfit', this.currentOutfit);
      let productIndex = -1;
      for (let i = 0; i < outfitData.outfitInformation.length; i += 1) {
        if (id === outfitData.outfitInformation[i].id) {
          productIndex = i;
        }
      }
      const newOutfitData = outfitData;
      newOutfitData.outfitInformation.splice(productIndex, 1);
      newOutfitData.outfitStyles.splice(productIndex, 1);
      newOutfitData.outfitReviews.splice(productIndex, 1);
      this.setState({
        outfitData: newOutfitData,
      });
    }
  }

  render() {
    if (this.state.show === false) {
      return (
        <div>Loading ...</div>
      );
    }
    return (
      <div>
        {this.state.overview
          ? (
            <Overview
              data={this.state.data}
              key={Math.random() * 1000000}
              outfitData={this.state.outfitData}
              refreshOutfit={this.refreshOutfit}
              toggleColorMode={this.toggleColorMode}
              ratingPercentage={this.state.ratingPercentage}
            />
          )
          : <div />}
        {this.state.reviews
          ? (
            <Reviews
              data={this.state.data}
              key={Math.random() * 1000000}
              ratingPercentage={this.state.ratingPercentage}
              avgRating={this.state.avgRating}
              colorMode={this.state.colorMode}
            />
          )
          : <div />}
        {this.state.qa
          ? (
            <QA
              data={this.state.data}
              key={Math.random() * 1000000}
              colorMode={this.state.colorMode}
            />
          )
          : <div />}
        {this.state.related
          ? (
            <Related
              data={this.state.data}
              outfitData={this.state.outfitData}
              refreshOutfit={this.refreshOutfit}
              addToOutfit={this.addToOutfit}
              removeFromOutfit={this.removeFromOutfit}
              key={Math.random() * 1000000}
              colorMode={this.state.colorMode}
            />
          )
          : <div />}
      </div>
    );
  }
}

export default App;

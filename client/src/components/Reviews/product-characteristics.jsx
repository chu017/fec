import React from 'react';

class ProductCharacteristics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: this.props.description,
    };

    this.produceRadioButtons = this.produceRadioButtons.bind(this);
    this.setDescription = this.setDescription.bind(this);
  }

  setDescription(e) {
    this.setState({
      displayDescription: this.state.description[e.target.value],
    });
  }

  produceRadioButtons() {
    const buttons = [];
    let description = '';
    const descriptionStyles = {
      fontSize: '12px',
      marginTop: '2px',
      display: 'flex',
      alignSelf: 'center',
      textAlign: 'center',
    };
    const radioStyles = {
      display: 'flex',
      alignSelf: 'center',
    };
    for (let i = 1; i < 6; i++) {
      if (i === 1 || i === 5) {
        description = this.state.description[i];
      } else if (this.state.displayDescription === this.state.description[i]) {
        description = this.state.displayDescription;
      } else {
        description = '';
      }
      buttons.push(
        <div className="product-characteristics-radio">
          <input onClick={this.setDescription} style={radioStyles} type="radio" name={this.props.name} value={i} />
          <div style={descriptionStyles}>{description}</div>
        </div>,
      );
    }
    return buttons;
  }

  render() {
    const radioBtnRow = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    };
    return (
      <div style={radioBtnRow}>
        <h5 className="section-heading">{this.props.name}</h5>
        <div className="form-row radio-buttons-row">
          {this.produceRadioButtons()}
        </div>
      </div>
    );
  }
};

export default ProductCharacteristics;

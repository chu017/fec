import sampleData from '.././sampleData.js'

const helpers = {
  average: (arr) => arr.reduce((acc, x) => acc + x) / arr.length,

  averageOfRatings: (ratingsObj) => {
    const toAverage = [];
    for (let rating in ratingsObj) {
      if (+ratingsObj[rating].length > 1) {
        for (let i = 0; i < +ratingsObj[rating]; i++) toAverage.push(+rating);
      } else {
        toAverage.push(+rating);
      }
    }
    if (!toAverage.length) return 0;
    return helpers.average(toAverage).toFixed(2);
  },

  findReviewPercentage: (ratingsObj) => {
    let total = helpers.getTotal(ratingsObj);
    const percentages = {};
    let percentageToAdd;
    for (let rating in ratingsObj) {
      percentageToAdd = ratingsObj[rating] / total;
      percentages[rating] = percentageToAdd;
    }
    return percentages;
  },

  getTotal: (ratingsObj) => {
    let total = 0;
    for (let rating in ratingsObj) {
      total += Number(ratingsObj[rating]);
    }
    return total;
  },

  productCharacteristicsTable: [
    ['Size', 'A size too small', ' 1/2 size too small', 'Perfect', '1/2 size too big', 'A size too big'],
    ['Width', 'Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    ['Comfort', 'Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    ['Quality', 'Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    ['Fit', 'Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
  ],
};

export default helpers;

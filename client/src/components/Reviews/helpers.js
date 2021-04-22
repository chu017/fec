import sampleData from '.././sampleData.js'

const helpers = {
  average: (arr) => arr.reduce((acc, x) => acc + x) / arr.length,

  averageOfRatings: (ratingsObj) => {
    const toAverage = [];
    for (let rating in ratingsObj){
<<<<<<< HEAD
<<<<<<< HEAD
      if(+ratingsObj[rating].length > 1) {
=======
      if(+ratingsObj[rating] > 1) {
>>>>>>> Star rating complete, font awesome library added
=======
      if(+ratingsObj[rating].length > 1) {
>>>>>>> added sorting feature, fixed bugs in ratings and reviews section, added form component
        for (let i = 0; i < +ratingsObj[rating]; i++) toAverage.push(+rating);
      } else {
        toAverage.push(+rating);
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> added sorting feature, fixed bugs in ratings and reviews section, added form component
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> more reviews button functionality created
  getTotal: (ratingsObj) => {
    let total = 0;
    for (let rating in ratingsObj) {
      total += Number(ratingsObj[rating]);
    }
    return total;
  }
<<<<<<< HEAD
=======
    return helpers.average(toAverage);
  },

>>>>>>> Star rating complete, font awesome library added
=======
  getTotal: (ratingsObj) => Object.values(ratingsObj).length,
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.
=======
>>>>>>> more reviews button functionality created
};

export default helpers;

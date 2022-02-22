const meals = require('../../data/Data.json').meals

//console.log(meals);

exports.handleListMeals = (req, res) => {

    res.send(meals)
}
const express = require('express');

const router = express.Router();

const mealsController = require('../controllers/mealsController')

router.use(express.json())

// console.log('router is', router)

router.get('/list', mealsController.handleListMeals)
// router.post('/add', usersController.handleAddUser)
// router.get('/delete', usersController.handleAddUser)
// router.get('/update', usersController.handleAddUser)

module.exports = router
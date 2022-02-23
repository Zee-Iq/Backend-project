const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController')

router.use(express.json())

// console.log('router is', router)

router.get('/list', userController.handleListUser)
router.post('/add', userController.handleAddUser)
// router.get('/delete', usersController.handleAddUser)
// router.get('/update', usersController.handleAddUser)

module.exports = router
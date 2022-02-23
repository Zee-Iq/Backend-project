const express = require('express');

const router = express.Router();

const registerController = require('../controllers/registerController')

router.use(express.json())

router.get('/', (req, res) => {
    res.send(`HELLO FROM REGISTER ROUTER `)
} )
router.get('/list', registerController.handleListRegister)
router.post('/add', registerController.handleAddRegister)
router.get('/edit', registerController.handleEditRegister)
router.get('/delete', registerController.handleDeleteRegister)




module.exports = router
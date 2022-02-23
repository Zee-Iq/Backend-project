const express = require('express');

const router = express.Router();

const contactController = require('../controllers/contactController')

router.use(express.json())

router.get('/', (req, res) => {
    res.send(`HELLO FROM CONTACT ROUTER --> to see the list of contacts please add    '/list'   parameter`)
} )
router.get('/list', contactController.handleListContact)
router.post('/add', contactController.handleAddContact)
router.get('/edit', contactController.handleEditContact)
router.post('/delete', contactController.handleDeleteContact)




module.exports = router
const express = require('express');

const router = express.Router();

const contactController = require('../controllers/contactController')

router.use(express.json())



router.get('/', contactController.handleListContact)
router.get('/hello', (req, res) => {
    res.send('HELLO FROM HELLO')
})


module.exports = router
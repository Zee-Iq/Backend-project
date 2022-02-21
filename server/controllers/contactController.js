
const data = require('../../client/src/datas/ContactData.json')

exports.handleListContact = (req, res) => {    

    res.send(data)
}

exports.handleAddContact = (req, res) => {

    res.send('HELLO FROM CONTACT CONTROLLER')
}
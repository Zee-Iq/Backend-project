//const res = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const fullpath = path.join(__dirname, "../../data/ContactData.json");

console.log("path is: ", fullpath);

let contacts = [];

// LIST
const loadContacts = () => {
  const data = fs.readFileSync(fullpath, "utf8");
  contacts = [...JSON.parse(data)];
};

loadContacts();

// ADD
const saveContacts = () => {
  fs.writeFileSync(fullpath, JSON.stringify(contacts, null, "\t"));
};

// LIST FUNCTION
exports.handleListContact = (req, res) => {
  res.send(contacts);
};

// ADD FUNCTION
exports.handleAddContact = (req, res) => {
  try {
    loadContacts();

    contacts.push(req.body);

    saveContacts();
    res.send(contacts);
  } catch (error) {
    console.log("handleAddContact error", error.message);
    res.send(error.message);
  }
};

//EDIT

exports.handleEditContact = (req, res) => {

    res.send('HELLO FROM EDIT')

}

// DELETE

exports.handleDeleteContact = (req, res) => {
    res.send('HELLO FROM DELETE')
}


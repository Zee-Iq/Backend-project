//const res = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const fullpath = path.join(__dirname, "../../data/RegisterData.json");

console.log("path is: ", fullpath);

let registeredUser = [];

// LIST
const loadUsers = () => {
  const data = fs.readFileSync(fullpath, "utf8");
  registeredUser = [...JSON.parse(data)];
};

loadUsers();

// ADD
const saveUsers = () => {
  fs.writeFileSync(fullpath, JSON.stringify(registeredUser, null, "\t"));
};

// LIST FUNCTION
exports.handleListRegister = (req, res) => {
  res.send(registeredUser);
};

// ADD FUNCTION
exports.handleAddRegister = (req, res) => {
  try {
    loadUsers();

    registeredUser.push(req.body);

    saveUsers();
    res.send(registeredUser);
  } catch (error) {
    console.log("handleAddContact error", error.message);
    res.send(error.message);
  }
};

//EDIT

exports.handleEditRegister = (req, res) => {

    res.send('HELLO FROM EDIT')

}

// DELETE

exports.handleDeleteRegister = (req, res) => {
    res.send('HELLO FROM usersDelete')
}


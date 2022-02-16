const express = require('express')
const app = express()

app.get("/" , (req, res) =>{
    res.send("hello fromserver.js ")
} )

app.listen(3009,() => console.log("server is running ") )
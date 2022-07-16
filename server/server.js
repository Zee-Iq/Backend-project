const path = require('path')
console.log('path is: ', __dirname)

const express = require('express')

const app = express()

require('dotenv').config()


app.use('/contacts', require('./routes/contactRoute'))
app.use('/meals', require('./routes/mealsRoute'))
app.use('/users', require('./routes/registerRoute'))

// app.get("/" , (req, res) =>{
//     res.send("hello fromserver.js ")
// } )

const port = process.env.PORT || 8000
app.listen(port,() => console.log("server is running at " + port) )



// heroku stuff
app.use(express.static("client/build"));

// test https for heroku app
// app.use(enforce.HTTPS());
// enforce.HTTPS({ trustProtoHeader: true });
// http.createServer(app).listen(port, function () {
//   console.log("Express server listening on port " + port);
// });

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

app.use(requireHTTPS);


if (process.env.NODE_ENV === "production") {
  const path = require("path");

  app.get("/*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
  );
}

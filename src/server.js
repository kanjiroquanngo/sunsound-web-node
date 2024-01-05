// const http = require('http');

// const server = http.createServer((req, res) =>{
//     console.log('run request...');
//     res.setHeader('Content-type', 'text/html');
//     res.write('<h3> Hello World! </h3>');
//     res.write('<h2> Chao mung den binh nguyen vo tan! </h2>');
//     res.end();
// })

// server.listen(3000, 'localhost', () =>{
//     console.log('Node.JS server is running on port 8080');
// })
import express from 'express';
//const express = require("express");
import configViewEngine from './configs/viewEngine';
//const path = require("path");
import initWebRoute from './route/web';
// import connection from './configs/connectDB';
require('dotenv').config();
import initAPIRoute from './route/api';

const app = express();
const port = process.env.PORT;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
configViewEngine(app);
initWebRoute(app);

initAPIRoute(app);
var cors = require('cors')
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get("/", (req, res) => {
//   res.render('index.ejs')
// })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})

app.use((req,res,next) =>{
const err = new Error('PAGE NOT FOUND');
err.status = 404;
next (err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  })
})


// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


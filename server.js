const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

// create express app 
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*'
  }
})

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type
app.use(bodyParser.urlencoded({extended: false}))

// parse request data application/json
app.use(bodyParser.json());

app.use(cors());

// app.use(function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     next();
//   });

// define root route
app.get('/', (req, res) => {
    res.send('hello world');
});

// import employee routes
const employeeRoutes = require('./src/routes/employee.routes');

// create employee router
app.use('/api/employee', employeeRoutes);

// listen to the port
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
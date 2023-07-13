// import modules
const express = require('express');
const dotenv = require('dotenv');

const cors = require('cors');
// importing routes
const getRouter = require('./routes/get.js');

// set port number
dotenv.config();
const server = express();
const PORT =  process.env.PORT || 8080;


// middleware
server.use(express.json());
server.use(cors());

// set route
server.use('/catch', getRouter);


// run server
server.listen(PORT, () => {
    console.log(`Serving running on localhost:${PORT}`);
});
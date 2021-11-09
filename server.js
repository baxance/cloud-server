'use strict';

const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log('app running');
})


/*

Choose a server you’ve built previously
  X Option 1: A simple API or Web Server
  Option 2: A socket.io event Hub
  X The server should not require a database
  X Check in your server to GitHub

Task 1:

  X Create a new environment, using Elastic Beanstalk from the AWS Control Panel (GUI)

  X Manually deploy your application to this environment by uploading a .zip file

Task 2:

  X Using the same server, create a new environment using Elastic Beanstalk from your terminal

  X Manually deploy your application to this environment by using eb deploy

*/
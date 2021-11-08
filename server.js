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
Option 1: A simple API or Web Server X
Option 2: A socket.io event Hub
The server should not require a database X
Check in your server to GitHub X

Task 1:

Create a new environment, using Elastic Beanstalk from the AWS Control Panel (GUI)
Manually deploy your application to this environment by uploading a .zip file

Task 2:

Using the same server, create a new environment using Elastic Beanstalk from your terminal
Manually deploy your application to this environment by using eb deploy

what do i need to run besides `npm install` when I'm getting something off the ground to fill out the package.json?

npm init dumps a bunch of dependencies into the package.json seemingly randomly

how do I get a clean package.json 

*/
# cloud-server

[GUI Deployment](http://cloudserver-env.eba-xkbpxpam.us-west-2.elasticbeanstalk.com/)

> `http://cloudserver-env.eba-xkbpxpam.us-west-2.elasticbeanstalk.com/`

[CLI Deployment](http://cloud-server-environment.eba-xkbpxpam.us-west-2.elasticbeanstalk.com/)

> `http://cloud-server-environment.eba-xkbpxpam.us-west-2.elasticbeanstalk.com/`

Since most of my labs are in a sorry state of affairs I just made the most basic server imaginable to launch. Good thing too since it's a struggle to get anything to work.

Had to install python, clone an AWS repo and run some stuff to get the eb CLI working. Zipping things from the ubuntu side of my PC but accessing it through the file explorer available in the GUI was a pain, had to copy it and navigate to something accessible by the file explorer, but smooth sailing after that.

Actually nevermind, looks like my Access ID and Secret Keys are expired somehow. I guess my system time was about 15 1/2 hours behind internet time, which is why the keys kept saying expired. Had to install chrony on ubuntu and use it to sync my system time up which got everything running smoothly.

## Feature Tasks

### Choose a server you’ve built previously

  X Option 1: A simple API or Web Server
  Option 2: A socket.io event Hub
  X The server should not require a database
  X Check in your server to GitHub

### Task 1:

  X Create a new environment, using Elastic Beanstalk from the AWS Control Panel (GUI)

  X Manually deploy your application to this environment by uploading a .zip file

### Task 2:

  X Using the same server, create a new environment using Elastic Beanstalk from your terminal

  X Manually deploy your application to this environment by using eb deploy

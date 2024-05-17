A demonstration of Docker to implement a simple 3 tier architecture

* frontend will be able to access the mid-tier
* mid-tier will be able to access the db

In order to run this in docker, simply type ```docker-compose up``` at the command prompt. Docker will then create the [MongoDB](https://www.mongodb.com/) from the stock [mongo](https://hub.docker.com/_/mongo) image. The api uses [nodejs](https://nodejs.org/) with [express](http://expressjs.com/) and is built from a [node:alpine](https://hub.docker.com/_/node) image. The front end uses [ReactJS](https://reactjs.org/) and built from a [node:alpine](https://hub.docker.com/_/node) image.


In local I did following setup:

I have installed nodejs v18.20.2
I have installed mongodb v1.43.0

after above setup I have run below command in both frontend and backend dir in vs code:
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm start

In sever.js,

  await mongoose.connect("mongodb://127.0.0.1:27017/todos", {


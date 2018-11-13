let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true });

module.exports = {mongoose};


// || 'mongodb://localhost:27017/TodoApp'

//process.env.MONGODBURI

// heroku config:set MONGOLAB_URI="mongodb://longtrain:123qwe123@ds261253.mlab.com:61253/todoapp"

// mongodb://heroku_mx61kbt2:p5rspv4uavd23tvfnpfpkdu65f@ds039768.mlab.com:39768/heroku_mx61kbt2
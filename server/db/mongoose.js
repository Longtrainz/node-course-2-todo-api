let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(' mongodb://heroku_mx61kbt2:p5rspv4uavd23tvfnpfpkdu65f@ds039768.mlab.com:39768/heroku_mx61kbt2', {useNewUrlParser: true });

module.exports = {mongoose};


// || 'mongodb://localhost:27017/TodoApp'

//process.env.MONGOURI
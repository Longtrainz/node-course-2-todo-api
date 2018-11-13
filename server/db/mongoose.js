let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOURI || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true });

module.exports = {mongoose};


// || 'mongodb://localhost:27017/TodoApp'

//process.env.MONGOURI
let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOURI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
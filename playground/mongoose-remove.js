const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let userId = '5be2c3af6a4fb3ec42fbd7dc';

// remove everything - empty curly braces
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// remove everything - empty curly braces
// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndDelete
// Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5bed33528ff95737eb18974b').then((todo) => {
//     console.log(todo);
// });

Todo.findOneAndRemove({text: 'to do smth'}).then((todo) => {
    console.log(todo);
});


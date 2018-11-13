const {ObjectID} = require('mongodb');

const {mongoos} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let userId = '5be2c3af6a4fb3ec42fbd7dc';

// let id = '5be98531c646fc93c051f3ebnnnn';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//        return console.log('Id not found');
//     }
//     console.log('Todo by id', todo)
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User:', JSON.stringify(user, undefined, 4));
}).catch((e) => console.log(e));
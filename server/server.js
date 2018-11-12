let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

// that is the middleware that we need to give to express. We now can send JSON to our express app.
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
       text: req.body.text 
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.listen(3000, () =>  {
    console.log('Started on port 3000');
});



















// let newTodo2 = new Todo({
//     text: 'Edit this video',
//     // completed: true,
//     // completedAt: 123
// });

// save todo to mongodb
// newTodo2.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

// User model
// email - require it - trim it - set type - set min length of 1



// // Create new user data
// let user = new User({
//     email: 'email@abc.com'
// });

// // Save new user
// user.save().then((doc) => {
//     console.log('User is saved', doc);
// }, (err) => {
//     console.log('Unable to save user', err);
// });



// add one todo
// let newTodo = new Todo({
//     text: 'Cook dinner'
// });

// save todo to mongodb 
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo');
// });



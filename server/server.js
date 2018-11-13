let express = require('express');
let bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
const port = process.env.PORT || 3000;

// that is the middleware that we need to give to express. We now can send JSON to our express app.
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
       text: req.body.text 
    });
    todo.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }).catch((e) => {
        res.status(400).send(e);
    })
});


// Get /todos/1234324
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    // res.send(req.params);

    // Validate id using isValid
    // if not valid - 404 and send empty body
    if (!ObjectID.isValid(id)) {
       return res.status(404).send();
    }
    // findById
    Todo.findById(id).then((todo) => {
        // success
            // if todo - send it back
            // if no todo - send back 404 with empty body
        if (!todo) {
            return res.status(404).send();
        }
             // if todo - send it back
         res.send({todo});
        
        // error
            // 400 - and send empty body back
    }).catch((e) => {
        res.status(400).send();
    });      
})

app.listen(port, () =>  {
    console.log(`Started on port ${port}`);
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




const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
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
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }).catch((e) => {
        res.status(400).send(e);
    });
});


// Get /todos/1234324
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    // res.send(req.params);
    if (!ObjectID.isValid(id)) {
       return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
         res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });      
});


// delete route
app.delete('/todos/:id', (req, res) => {
    // get the id
    let id = req.params.id;
    // validate the id -> not valid? return 404
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    // remove todo by id
    Todo.findByIdAndRemove(id).then((todo) => {
        //success -> if no doc, send 404;
        if (!todo) {
           return res.status(404).send();
        }
        // if doc, send doc back with 200
         res.send(todo);
    }).catch((e) => {
         // error -> 400 with empty body
         res.status(400).send();
    });   
});

app.patch('/todos/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })
});


// POST /users
app.post('/users', (req, res) => {
    let body = _.pick(req.body, ['email', 'password']);
    let user = new User(body); // body is an object with email and password properties and values

    user.save().then(() => {
       return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    }); 
});

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




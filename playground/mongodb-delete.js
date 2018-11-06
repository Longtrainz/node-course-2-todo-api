// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID,} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // Delete many without callbacks
    // db.collection('Users').deleteMany({name: 'Rose'});

    // // Find one and delete by id
    // db.collection('Users').findOneAndDelete({_id: ObjectID("5be04a0aa1f779cf5d11c25f")})
    // .then((result) => {
    //     console.log(result);
    // });

    //or
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5be049db691d70caed047c45")})
    .then((result) => {
        console.log(result);
    });

    // client.close();
});




// // Destructuring
// let user = {name: 'vlad', age: 32};
// let {name, age} = user;
// console.log(name, age);
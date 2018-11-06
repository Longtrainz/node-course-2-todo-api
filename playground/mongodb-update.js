// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID,} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // Find one and Update
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5be17bffff213c03e749d16e")
    // }, {
    //    $set : {
    //        completed: true
    //    } 
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5be049d5071967cebde60836')
    }, {
        $set : {
            name: 'Jen'
        },
        $inc: {
            age: -2
        }    
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

     // client.close();
});




// // Destructuring
// let user = {name: 'vlad', age: 32};
// let {name, age} = user;
// console.log(name, age);
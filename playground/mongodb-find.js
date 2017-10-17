// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.error('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Dragan Mijatovic'}).count().then((count) => {
        console.log(`There are ${count} users with name Dragan Mijatovic`);
    }, (err) => {
        console.error('Unable to fetch todos', err);
    });

    // db.close();
});
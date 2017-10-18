// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     "text" : "Eat lunch",
    //     "complete" : false
    // }).then((res) => {
    //     console.log(res);
    // });

    // deleteOnbe
    // db.collection('Todos').deleteOne({
    //     "text" : "Eat lunch"
    // }).then((res) => {
    //     console.log(res);
    // });

    // findOneAndDelete
    db.collection('Todos')
        .findOneAndDelete({"complete" : false})
        .then((res) => {
            console.log(res);
        });

    // db.close();
});
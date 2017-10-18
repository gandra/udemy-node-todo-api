// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //     .findOneAndUpdate(
    //         {_id: new ObjectID("59e622ea207cc3fb7dc0296e")},
    //         {
    //             $set: {
    //                 completed: true
    //             }
    //         },
    //         {
    //             returnOriginal: false
    //         }
    //     )
    //     .then((res) => {
    //         console.log(res);
    //     });

    db.collection('Users')
        .findOneAndUpdate(
            {
                _id: new ObjectID('59e6261e207cc3fb7dc02a3b')
            },
            {
                $set: {
                    name: 'Milos Obilic'
                },
                $inc: {
                    age: 2
                }
            },
            {
                returnOriginal: false
            }
        )
        .then((res) => {
            console.log(res);
        });

    // db.close();
});


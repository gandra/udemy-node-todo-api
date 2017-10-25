const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '59e8d70ddfd9981709228e21xx';
//
// if (!ObjectID.isValid(id)) {
//     return console.error(`ID not valid: ${id}`);
// }


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => {
//     console.error(e);
// });


const id = '59e8c5f93cec091309e6dd8d';
User
    .findById(id)
    .then((user) => {
        if (!user) {
            return console.log(`Not found user for id ${id}`);
        }
        console.log(JSON.stringify(user, undefined, 2));
    })
    .catch((err) => {
        console.error('Error finding user!', err);
    });

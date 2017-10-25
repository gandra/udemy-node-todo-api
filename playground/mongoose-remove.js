const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove all
// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();
// Todo.findOneAndRemove();

Todo.findByIdAndRemove('59f06608632fbf9469a43b95').then((todo) => {
    console.log(todo);
});

Todo.findOneAndRemove({_id: '59f06608632fbf9469a43b95'}).then((todo) => {
    console.log(todo);
});
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});


let newTodo = new Todo({
    text: 'Walk a dog',
    completed: true,
    completedAt: Date.now()
});

newTodo.save().then((doc) => {
    console.log('Saved Todo', doc);
}, (err) => {
    console.error('Unable to save Todo', err);
});


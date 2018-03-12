const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/Todo');
const { User } = require('../server/models/User');

const id = '5aa622485a8b115c71d5c14c';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log('Id not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch(e => {
    console.log(e);
  });

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo by Id: ', todo);
//   })
//   .catch(e => {
//     console.log(e);
//   });

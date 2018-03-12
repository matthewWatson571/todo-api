// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to db');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate(
  //   {
  //     _id: new ObjectID('5aa5fdf4b5d7c675ab6d343c')
  //   },
  //   {
  //     $set: {
  //       completed: true
  //     }
  //   },
  //   {
  //     returnOriginal: false
  //   }
  // ).then((result) => {
  //   console.log(result);
  // });

  db
    .collection('Users')
    .findOneAndUpdate(
      {
        name: 'Willow Watson'
      },
      {
        $set: {
          name: 'Willy Watson'
        },
        $inc: {
          age: -1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });

  // client.close();
});

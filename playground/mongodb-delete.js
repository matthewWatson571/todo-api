// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to db');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  //deleteMany
  // db
  //   .collection('Todos')
  //   .deleteMany({ text: 'Eat Lunch' })
  //   .then(result => {
  //     console.log(result);
  //   });

  //deleteOne
  // db
  //   .collection('Todos')
  //   .deleteOne({ text: 'blah' })
  //   .then(result => {
  //     console.log(result);
  //   });

  //findOneAndDelete
  // db
  //   .collection('Todos')
  //   .findOneAndDelete({ text: 'blah' })
  //   .then(result => {
  //     console.log(result);
  //   });

    // db.collection('Users').deleteMany({name: 'Andrew'});

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID('57ac8d47878a299e5dc21bc8')
    }).then((results) => {
      console.log(JSON.stringify(results, undefined, 2));
    });

  // client.close();
});

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

mongoose.connect('mongodb://localhost/test', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });




const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!

  const kittySchema = new mongoose.Schema({
    name: String
  });
  const Kitten = mongoose.model('Kitten', kittySchema);

  const fluffy = new Kitten({ name: 'fluffy' });

  fluffy.save(function (err, fluffy) {
    if (err) {
        return console.error(err);
    }
  });


  
});

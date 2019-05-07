const mongoose = require("mongoose");
require('mongoose-type-url');
const Schema = mongoose.Schema;


// db.once('open', function callback() {
const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  url: { work: {type: mongoose.SchemaTypes.Url, required: true },
         profile: { type: mongoose.SchemaTypes.Url, required: true }},
  image: { work: {type: mongoose.SchemaTypes.Url, required: true }},
  profile: { type: mongoose.SchemaTypes.Url, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;


// }).then(() => {

//   // Only close the connection when your app is terminating
//   return mongoose.connection.close()

// }).catch(err => {

//   // Log any errors that are thrown in the Promise chain
//   console.log(err)

// })
// });

const mongoose = require("mongoose");
require('mongoose-type-url');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  url: { work: {type: mongoose.SchemaTypes.Url, required: true },
         profile: { type: mongoose.SchemaTypes.Url, required: true },
        },
  image: { work: {type: mongoose.SchemaTypes.Url, required: true },
  profile: { type: mongoose.SchemaTypes.Url, required: true },
 }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;


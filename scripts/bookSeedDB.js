const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/bookseed"
);

const bookSeeds = [
  {
    title: "The Dead Zone",
    author: "Stephen King",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "The Punch Escrow",
    author: "Tal M. Klein",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "Coraline",
    author: "Neil Gaiman",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    author: "Charles Petzold",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "The Everything Store: Jeff Bezos and the Age of Amazon",
    author: "Brad Stone",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "Total Recall: My Unbelievably True Life Story",
    author: "Arnold Schwarzenegger",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    author: "Ashlee Vance",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "Astrophysics for People in a Hurry",
    author: "Neil deGrasse Tyson",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  },
  {
    title: "Born a Crime: Stories from a South African Childhood",
    author: "Trevor Noah",
    description: "",
    date: new Date(Date.now()),
    image: "",
    link: ""
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

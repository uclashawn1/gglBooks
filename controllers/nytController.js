const axios = require("axios");
const db = require("../models");

// Defining methods for the nytController

// findAll searches the NYT Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://api.nytimes.com/svc/books/v3/lists/current", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.nytId.toString() !== apiBook.id)
          )
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};

// import axios from "axios";


//   getBooks() {
//     const url = `${API_URL}/users/`;
//     axios.get(url).then(response => response.data)
//     .then((data) => {
//       this.setState({ users: data })
//       console.log(this.state.users)
//      });
//   }



  // call getBooks route on the server(react frontend), on backend call api inside route with API URL and API KEY
  // above is the correct format. add key to .env file
  // Gets the book with the given id

// import http from "../services/httpService";

// export default {
//   // Gets books from the Google API
//   getBooks: function(q) {
//     return http.get("/api/google", {
//       params: { q: "title:" + q }
//     });
//   },
//   // Gets all saved books
//   getSavedBooks: function() {
//     return http.get("/api//books");
//   },
//   // Deletes the saved book with the given id
//   deleteBook: function(id) {
//     return http.delete("/api//books/" + id);
//   },
//   // Saves an book to the database
//   saveBook: function(bookData) {
//     return http.post("/api//books", bookData);
//   }
// };
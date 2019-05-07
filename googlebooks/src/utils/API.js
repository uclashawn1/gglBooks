import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
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
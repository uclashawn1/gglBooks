const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const nytController = require("../../controllers/nytController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/nytbooks"
router.route("/")
  .get(nytController.findAll)
  .post(nytController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(nytController.findById)
  .put(nytController.update)
  .delete(nytController.remove);

module.exports = router;



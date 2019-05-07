const router = require("express").Router();
const bookRoutes = require("./books");
const nytController = require("../../controllers/nytController");
// Book routes
router.use("/books", bookRoutes);
router.use("/nytArticles").get(nytController.findAll);

module.exports = router;

// const router = require("express").Router();
// const googleController = require("../../controllers/googleController");

// // Matches with "/api/google"
// router.route("/").get(googleController.findAll);

// module.exports = router;
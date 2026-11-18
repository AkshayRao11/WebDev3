const express = require("express");
const router = express.Router();
const gameController = require("../controller/gameController");

router.route("/")
  .get(gameController.getAllGames)
  .post(gameController.createGame);

router.route("/:id")
  .get(gameController.getGameById)
  .put(gameController.updateGame)
  .delete(gameController.deleteGame);

module.exports = router;
const gameModel = require("../model/gameModel");

const getAllGames = async (req, res) => {
  try {
    const games = await gameModel.getAll();
    res.status(200).json({ success: true, count: games.length, data: games });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getGameById = async (req, res) => {
  try {
    const gameId = Number(req.params.id);
    const game = await gameModel.getById(gameId);
    
    if (!game) {
      return res.status(404).json({ success: false, message: "Game not found" });
    }
    res.status(200).json({ success: true, data: game });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createGame = async (req, res) => {
  try {
    const newGame = await gameModel.createGame(req.body);
    res.status(201).json({ success: true, data: newGame });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateGame = async (req, res) => {
  try {
    const gameId = Number(req.params.id);
    const updatedGame = await gameModel.updateGame(gameId, req.body);
    
    if (!updatedGame) {
      return res.status(404).json({ success: false, message: "Game not found" });
    }
    res.status(200).json({ success: true, data: updatedGame });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteGame = async (req, res) => {
  try {
    const gameId = Number(req.params.id);
    const deletedGame = await gameModel.deleteGame(gameId);
    
    if (!deletedGame) {
      return res.status(404).json({ success: false, message: "Game not found" });
    }
    res.status(200).json({ success: true, message: "Game deleted successfully", data: deletedGame });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
};
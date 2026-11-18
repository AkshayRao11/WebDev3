const Game = require("../Game");

const getAll = async () => {
  return await Game.find();
};

const getById = async (id) => {
  return await Game.findOne({ id });
};

const createGame = async (gameData) => {
  return await Game.create(gameData);
};

const updateGame = async (id, gameData) => {
  return await Game.findOneAndUpdate({ id }, gameData, { 
    new: true, 
    runValidators: true 
  });
};

const deleteGame = async (id) => {
  return await Game.findOneAndDelete({ id });
};

module.exports = {
  getAll,
  getById,
  createGame,
  updateGame,
  deleteGame,
};
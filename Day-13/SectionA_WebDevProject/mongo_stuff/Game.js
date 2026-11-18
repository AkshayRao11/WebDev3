const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: [true, "Title is required"],
    minLength: [3, "Title must be at least 3 characters long"],
    maxLength: [100, "Title must be at most 100 characters long"]
  },
  price: { 
    type: Number, 
    required: [true, "Price is required"] 
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: 0,
    max: 5,
  },
  genre: { 
    type: String, 
    required: [true, "Genre is required"] 
  },
});

module.exports = mongoose.model("Game", gameSchema);
import mongoose from "mongoose";

// Define Schema
const MovieSchema = new mongoose.Schema({
  // required -> that providing name is compulsory, trim -> removes extra spaces
  name: { type: String, required: true, trim: true }, // String
  ratings: { type: Number, required: true, min: 1, max: 5 }, // Number
  money: {
    type: mongoose.Decimal128, // arbitrary value
    required: true, // property -> tells that money is the field which must be filled
    validate: (v) => v >= 10, // function
  },
  genre: { type: Array }, // Array
  isActive: { type: Boolean }, // Boolean
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ], // Array of objects
});

// Creating Model
const MovieModel = mongoose.model("Movie", MovieSchema);
// the collection "Movie" will get converted into "movies"
export default MovieModel;

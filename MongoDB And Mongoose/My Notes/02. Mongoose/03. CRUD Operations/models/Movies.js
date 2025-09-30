import e from "express";
import mongoose from "mongoose";

// -------------------*************-------------------
// Define Schema
const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});
// -------------------*************-------------------

// -------------------*************-------------------
// Creating Model
const MovieModel = mongoose.model("Movie", MovieSchema);
// the collection "Movie" will get converted into "movies"
export default MovieModel;
// -------------------*************-------------------

// -------------------*************-------------------
// Create Document - inserting One document
const createDoc = async () => {
  try {
    // entered data in document
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie." }],
    });

    // saving document
    const result = await m1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// export this function and use it in index.js
export { createDoc };
// -------------------*************-------------------

// -------------------*************-------------------
// Create multiple documents at the same time
const createMultipleDoc = async () => {
  try {
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie" }],
    });
    const m2 = new MovieModel({
      name: "John Wick Chapter 4",
      ratings: 5,
      money: 23000,
      genre: ["action"],
      isActive: true,
      comments: [{ value: "John doesn't seem that angry anymore :(" }],
    });
    const m3 = new MovieModel({
      name: "Mission Impossible - Dead Reckoning Part One",
      ratings: 4,
      money: 60000,
      genre: ["action", "spy", "crime film", "thriller"],
      isActive: true,
      comments: [{ value: "Ok that was TOM but where is Jerry?" }],
    });
    const m4 = new MovieModel({
      name: "Transformers: Rise of the beasts",
      ratings: 4,
      money: 220000,
      genre: ["action", "adventure", "science fiction", "Fantasy"],
      isActive: true,
      comments: [{ value: "That was enough VFX for today" }],
    });
    const m5 = new MovieModel({
      name: "The Expendable 4",
      ratings: 4,
      money: 250000,
      genre: ["action", "war", "comedy", "thriller"],
      isActive: true,
      comments: [
        { value: "That was enough fighting and blowing stuff for today." },
      ],
    });
    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export { createMultipleDoc };
// -------------------*************-------------------

// -------------------*************-------------------
// Retrieving Data from Database

// Retrieving All Documents
const allDoc = async () => {
  try {
    const result = await MovieModel.find(); // Gives All Data
    // console.log(result);

    console.clear();

    // Iterating Over
    console.log("\nMovie Name:\n");
    result.forEach((movie) => {
      console.log(movie.name);
      console.log(movie.ratings);
      console.log(movie.money + "\n");
    });
  } catch (error) {
    console.log(error);
  }
};
export { allDoc };

// Retrieving Single Document
const singleDoc = async () => {
  try {
    // const result = await MovieModel.findById("68d84255d444e21a24bd255a"); // Retrieving single document
    // console.clear();
    // console.log(result);
    // console.log(result.name);
    // console.log(result.ratings);
    // console.log(result.money);
    // console.log(result.comments);

    // retrieving single doument with specific field
    const result = await MovieModel.findById(
      "68d84255d444e21a24bd255a",
      "name"
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export { singleDoc };

// Retrieving single document using field data
const docWithField = async () => {
  try {
    const result = await MovieModel.find({ name: "Extraction 2" });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export { docWithField };
// -------------------*************-------------------

// -------------------*************-------------------
// MongoDB Queries
const queries = async () => {
  try {
    // // This will give us starting 3 documents
    // console.log("\nPerforming Limit Operation\n");
    // const result = await MovieModel.find().limit(3);
    // console.log(result);

    // // This will skip starting 3 documents
    // console.log("\nPerforming Skip Operation\n");
    // const result = await MovieModel.find().skip(3);
    // console.log(result);

    // // This will count documents
    // console.log("\nPerforming Sort Operation\n");
    // const result = await MovieModel.find().countDocuments();
    // console.log(result);

    // // This will sort documents 1 for ascending and -1 for descending
    // console.log("\nPerforming Sort Operation\n");
    // const result = await MovieModel.find().sort({ name:1 });  // asc
    // // const result = await MovieModel.find().sort({ name: -1 }); // desc
    // console.log(result);

    // Comparison Operators
    console.log("\nPerforming Sort Operation\n");
    // const result = await MovieModel.find({ money: { $gt: 60000 } });  // greater than
    // const result = await MovieModel.find({ money: { $lt: 60000 } });  // less than
    // const result = await MovieModel.find({ money: { $ne: 60000 } });  // not equal
    // const result = await MovieModel.find({
    //   $and: [{ money: 220000 }, { ratings: 4 }],
    // }); // and operator
    const result = await MovieModel.find({
      $or: [{ money: 220000 }, { ratings: 4 }],
    }); // or operator
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export { queries };
// -------------------*************-------------------

// -------------------*************-------------------
// Updating Document

// Update One
const updateOneDoc = async (id) => {
  try {
    const result = await MovieModel.updateOne(
      { _id: id },
      { name: "Huxn-WebDev" }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export { updateOneDoc };

// Update Many
const updateManyDoc = async () => {
  try {
    const result = await MovieModel.updateMany(
      { ratings: 5 },
      { name: "5 Star Movies" }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export { updateManyDoc };
// -------------------*************-------------------

// -------------------*************-------------------
// Delete
const deleteDoc = async () => {
  try {
    // // this will find document by id and then delete it
    // const result = await MovieModel.findByIdAndDelete("68d84255d444e21a24bd2558");

    // // This will delete one document
    // const result = await MovieModel.deleteOne({ ratings: 5 });

    // This will delete many document
    const result = await MovieModel.deleteMany({ ratings: 4 });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export { deleteDoc };
// -------------------*************-------------------

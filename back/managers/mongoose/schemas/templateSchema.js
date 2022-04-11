const mongoose = require("mongoose");
const templateSchema = new mongoose.Schema({
  column1: String,
  column2: String,
  // email: {
  //   type: String,
  //   required: true,
  //   lowercase: true,
  //   unique: true,
  // },
  // createdAt: {
  //   type: Date,
  //   default: () => Date.now(),
  // },
  // updatedAt: Date,
  //   age: {
  //     type: Number,
  //     min: 1,
  //     max: 100,
  //     validate: {
  //       validator: (v) => v % 2 === 0,
  //       message: (props) => `${props.value} is not an even number`,
  //     },
  //   },
  //   bestFriend: mongoose.SchemaTypes.ObjectId,
  //   hobbies: [String],
});
module.exports = mongoose.model("template", templateSchema);
// const collection = async () => await Model.createCollection();
// collection();

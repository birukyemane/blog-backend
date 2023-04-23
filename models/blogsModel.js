const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    author: String,
    date: Date,
    readingTime: Number,
    category: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("blog", blogsSchema);

// let blogs = [{
//     "_id": "1",
//     "name": "about react hooks"
// }]

// module.exports = blogs;

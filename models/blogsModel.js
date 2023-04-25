const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema(
  {
    title: String,
    description:String,
    content: String,
    author: String,
    readingTime: Number,
    image:String,
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

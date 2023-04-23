let blogsModel = require("../models/blogsModel");

module.exports.getAllBlogs = async (req, res, next) => {
  try {
    res.json(blogsModel);
  } catch (e) {
    next(e);
  }
};

let blogsModel = require("../models/blogsModel");

module.exports.getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await blogsModel.find();
    res.json(blogs);
  } catch (e) {
    next(e);
  }
};

module.exports.addNewBlog = async (req, res, next) => {
  try {
    const new_blog = new blogsModel(req.body); // doc
    const results = await new_blog.save(); // persist
    res.json(results);
  } catch (e) {
    next(e);
  }
};

module.exports.getBlogById = async (req, res, next) => {
  try {
    const { blog_id } = req.params; // {meal_id: 2}
    const blog = await blogsModel.findOne({ _id: blog_id });
    res.json(blog);
  } catch (e) {
    next(e);
  }
};

module.exports.updateBlogById = async (req, res, next) => {
  try {
    const updated_blog = req.body; // {"_id":2,....}
    const { blog_id } = req.params; // {meal_id: 2}
    const result = await blogsModel.findByIdAndUpdate(blog_id, updated_blog);
    res.json(result);
  } catch (e) {
    next(e);
  }
};

module.exports.deleteBlogById = async (req, res, next) => {
  try {
    const { blog_id } = req.params;
    const result = await blogsModel.findByIdAndRemove(blog_id);
    res.json(result);
  } catch (e) {
    next(e);
  }
};


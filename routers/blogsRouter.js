const express = require("express");
const router = express.Router();
const { getAllBlogs, addNewBlog, getBlogById, updateBlogById, deleteBlogById } = require("../controllers/blogsController");

router.get("/", getAllBlogs);
router.post("/", addNewBlog);
router.get('/:blog_id', getBlogById);
router.put('/:blog_id', updateBlogById);
router.delete('/:blog_id', deleteBlogById);

module.exports = router;

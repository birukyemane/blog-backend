const express = require('express');
const router = express.Router();
const {getAllBlogs} = require('../controllers/blogsController');

router.get('/', getAllBlogs);

module.exports = router;
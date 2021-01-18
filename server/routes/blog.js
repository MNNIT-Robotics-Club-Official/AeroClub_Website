const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Blog = mongoose.model('Blog')
const requireLogin = require('../middleware/requireLogin')

router.get('/blogs', requireLogin, (req, res) => {

    res.setHeader('Content-Range', 'blogs 0-10/20')
    Blog.find({})
        .then(blogs => {
            let arr = []
            blogs.forEach(blog => arr.push(blog.transform()))
            res.json(arr)
        })
        .catch(e => console.log(e))
})

module.exports = router
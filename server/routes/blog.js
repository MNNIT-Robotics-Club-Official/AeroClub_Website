const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Blog = require('../models/blog')
const { isSignedIn } = require('../middleware/auth')

router.get('/blogs', isSignedIn, (req, res) => {

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
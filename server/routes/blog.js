const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Blog = mongoose.model('Blog')
const requireLogin = require('../middleware/requireLogin')

router.get('/blogs', requireLogin, (req, res) => {

    console.log(req.query)

    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
    res.header('Content-Range', 'blogs 0-20/20')
    Blog.find()
        .then(blogs => {

            const obj = blogs

            obj.forEach(b => {
                b["id"] = b["_id"]
                delete b._id
            })
            console.log(obj)
            res.json({ data: blogs, total: blogs.length })
        })
        .catch(e => console.log(e))
})

module.exports = router
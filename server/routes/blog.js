const express = require('express')
const router = express.Router()
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

router.get('/blogs/:id', isSignedIn, (req, res) => {
    Blog.findOne({ _id: req.params.id })
        .then(blog => {
            res.json(blog.transform())
        })
        .catch(e => console.log(e))
})

router.post('/blogs', (req, res) => {
    console.log(req.body)

    const { title, body, pic, postedBy, publishedAt } = req.body
    const blog = new Blog({
        title,
        body,
        pic: pic.src,
        postedBy,
        publishedAt
    })

    blog.save().then(blog => {
        const { id, title, body, postedBy, publishedAt } = blog.transform()
        res.json({ id: id.toString(), title, body, postedBy, publishedAt })
    })
        .catch(e => console.log(e))
})

router.delete('/blogs/:id', isSignedIn, (req, res) => {
    Blog.findByIdAndDelete(req.params.id, (err, blog) => {
        if (err) return res.status(500).send(err)
        return res.json({ blog })
    })
})

module.exports = router
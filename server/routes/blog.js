const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')
const { isSignedIn, isAdmin } = require('../middleware/auth')

// fetching all blogs
router.get('/blogs', (req, res) => {
    res.setHeader('Content-Range', 'blogs 0-10/20')
    Blog.find({})
        .then(blogs => {
            let arr = []
            blogs.forEach(blog => arr.push(blog.transform()))
            res.json(arr)
        })
        .catch(e => console.log(e))
})

// fetching a blog with id
router.get('/blogs/:id', (req, res) => {
    Blog.findOne({ _id: req.params.id })
        .then(blog => {
            res.json(blog.transform())
        })
        .catch(e => console.log(e))
})

// creating a blog
router.post('/blogs', isSignedIn, isAdmin, (req, res) => {

    const blog = new Blog(req.body)
    blog.save().then(blog => {
        const { id, title, body, pic, postedBy, publishedAt } = blog.transform()
        res.json({ id: id.toString(), title, pic, body, postedBy, publishedAt })
    })
        .catch(e => console.log(e))
})

// updating a blog
router.put('/blogs/:id', isSignedIn, isAdmin, (req, res) => {
    Blog.findOneAndReplace({ _id: req.params.id }, req.body, null, (e, blog) => {
        if (e) {
            return res.status(400).json({
                error: "Blog cannot be updated !"
            })
        }
        return res.json(blog.transform())
    })
})

// deleting a blog
router.delete('/blogs/:id', isSignedIn, isAdmin, (req, res) => {
    Blog.findByIdAndDelete(req.params.id, (err, blog) => {
        if (err) return res.status(500).send(err)
        return res.json({ blog })
    })
})

module.exports = router
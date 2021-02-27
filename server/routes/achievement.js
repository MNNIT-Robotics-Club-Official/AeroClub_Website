const express = require('express')
const router = express.Router()
const Achievement = require("../models/achievement")
const { isSignedIn, isAdmin } = require('../middleware/auth')

// fetching all news
router.get('/achievement', (req, res) => {
    res.setHeader('Content-Range', 'news 0-10/20')
  res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
    
    Achievement.find({}).sort('-year')
        .then(achievements => {
            let arr = []
            achievements.forEach(achievement => arr.push(achievement.transform()))
            res.json(arr)
        })
        .catch(e => console.log(e))
})

// fetching a news with id
router.get('/achievement/:id', (req, res) => {
    Achievement.findOne({ _id: req.params.id })
        .then(achievement => {
            res.json(achievement.transform())
        })
        .catch(e => console.log(e))
})

// creating a news
router.post('/achievement', isSignedIn, isAdmin, (req, res) => {

    const achievement = new Achievement(req.body)
    achievement.save().then(achievement => {
        res.json(achievement.transform())
    })
        .catch(e => console.log(e))
})

// updating a news
router.put('/achievement/:id', isSignedIn, isAdmin, (req, res) => {
    Achievement.findOneAndReplace({ _id: req.params.id }, req.body, null, (e, achievement) => {
        if (e) {
            return res.status(400).json({
                error: "achievement cannot be updated !"
            })
        }
        return res.json(achievement.transform())
    })
})

// deleting a news
router.delete('/achievement/:id', isSignedIn, isAdmin, (req, res) => {
    Achievement.findByIdAndDelete(req.params.id, (err, achievement) => {
        if (err) return res.status(500).send(err)
        return res.json({ achievement })
    })
})

module.exports = router
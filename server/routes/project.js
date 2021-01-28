const express = require('express')
const router = express.Router()
const Project = require('../models/project')
const { isSignedIn, isAdmin } = require('../middleware/auth')

// fetching all projects
router.get('/projects', (req, res) => {
    res.setHeader('Content-Range', 'projects 0-10/20')
    Project.find({})
        .then(projects => {
            let arr = []
            projects.forEach(project => arr.push(project.transform()))
            res.json(arr)
        })
        .catch(e => console.log(e))
})

// fetching a projects with id
router.get('/projects/:id', (req, res) => {
    Project.findOne({ _id: req.params.id })
        .then(project => {
            res.json(project.transform())
        })
        .catch(e => console.log(e))
})

// creating a project
router.post('/projects', isSignedIn, isAdmin, (req, res) => {

    const project = new Project(req.body)
    console.log(req.body)
    project.save().then(project => {
        const { id, title, teamname, description, objective, pic, status, member, issuedon } = project.transform()
        res.json({ id: id.toString(), title, teamname, description, objective, pic, status, member, issuedon })
        
    })
        .catch(e => console.log(e))
})

// updating a project
router.put('/projects/:id', isSignedIn, isAdmin, (req, res) => {
    Project.findOneAndReplace({ _id: req.params.id }, req.body, null, (e, project) => {
        if (e) {
            return res.status(400).json({
                error: "Project cannot be updated !"
            })
        }
        return res.json(project.transform())
    })
})

// deleting a project
router.delete('/projects/:id', isSignedIn, isAdmin, (req, res) => {
    Project.findByIdAndDelete(req.params.id, (err, project) => {
        if (err) return res.status(500).send(err)
        return res.json({ project })
    })
})

module.exports = router
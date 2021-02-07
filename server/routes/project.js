const express = require("express");
const router = express.Router();
const { Project, Member } = require("../models/project");
const { isSignedIn, isAdmin } = require("../middleware/auth");
const { json } = require("express");
const user = require("../models/user");
const { findById } = require("../models/user");

// fetching all projects
router.get("/projects", (req, res) => {
  res.setHeader("Content-Range", "projects 0-10/20");
  Project.find({})
    .then((projects) => {
      let arr = [];
      projects.forEach((project) => arr.push(project.transform()));
      res.json(arr);
    })
    .catch((e) => console.log(e));
});

// fetching a projects with id
router.get("/projects/:id", (req, res) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.json({ error: "not found !" });
  }

  Project.findOne({ _id: req.params.id })
    .then((project) => {
      res.json(project.transform());
    })
    .catch((e) => console.log(e));
});

// creating a project
router.post("/projects", isSignedIn, (req, res) => {
  const project = new Project(req.body);
  // console.log(req.body)
  project.members.push(
    new Member({ user: req.user._id, accepted: true, leader: true })
  );
  req.user.projects.push(project._id);
  project.save((err, project) => {
    if (err) {
      return res.status(400).json({
        err: err.message,
      });
    }
    req.user.save((err, user) => {
      if (err) {
        return res.status(400).json({
          err: err.message,
        });
      }
    });
    const {
      id,
      title,
      teamname,
      description,
      objective,
      pic,
      status,
      member,
      issuedon,
    } = project.transform();
    res.json({
      id: id.toString(),
      title,
      teamname,
      description,
      objective,
      pic,
      status,
      member,
      issuedon,
    });
  });
});

// updating a project
router.put("/projects/:id", isSignedIn, isAdmin, (req, res) => {
  Project.findOneAndReplace(
    { _id: req.params.id },
    req.body,
    null,
    (e, project) => {
      if (e) {
        return res.status(400).json({
          error: "Project cannot be updated !",
        });
      }
      return res.json(project.transform());
    }
  );
});

// deleting a project
router.delete("/projects/:id", isSignedIn, isAdmin, (req, res) => {
  Project.findByIdAndDelete(req.params.id, (err, project) => {
    if (err) return res.status(500).send(err);
    return res.json({ project });
  });
});
module.exports = router;

//Invite member to the project
router.post("/projects/invite", isSignedIn, (req, res) => {
  const { email, projectId } = req.body;
  let userId;
  user.findOne({email: email}).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No such user found.",
      });
    }
    userId = user._id;
    console.log(user);
    Project.findById(projectId).exec((err, project) => {
      if (err || !project) {
        return res.status(400).json({
          error: "Project not found in DB",
        });
      }
      let isMember = false;
      for (mem of project.members) {
        if (JSON.stringify(mem.user) === JSON.stringify(userId)) {
          isMember = true;
          break;
        }
      }
      if (isMember) {
        return res.status(400).json({
          error: "User already a member.",
        });
      }
      project.members.push(
        new Member({ user: userId, accepted: false, leader: false })
      );
      project.save((err, updatedProject) => {
        if (err) {
          return res.status(400).json({
            error: "Cannot add project to member.",
          });
        }
        res.json({
          msg: "Member added successfully",
        });
      });
    });
  });
});
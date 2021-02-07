const { request } = require("express");
const ComponentsIssue = require("../models/issue");
const { Project } = require("../models/project");
const user = require("../models/user");

exports.requestComponent = (req, res, next) => {
  let component = req.component;
  if (component.available < req.body.num) {
    return res.status(400).json({
      error: "Not enough available.",
    });
  }

  const componentIssue = new ComponentsIssue({
    component: req.component._id,
    reason: req.body.reason,
    user: req.user._id,
    num: req.body.num,
  });

  componentIssue.save((err, componentIssue) => {
    if (err) {
      return res.status(400).json({
        error: "Cannot create component request.",
      });
    }
    res.json({
      msg: `Successfully requested ${component.name}, wait for approval.`,
    });
  });
};

exports.getAllRequests = (req, res) => {
  res.setHeader("Content-Range", "issue 0-10/20");
  ComponentsIssue.find({})
    .populate("user")
    .populate("component")
    .exec((err, componentIssues) => {
      if (err) {
        return res.status(400).json({
          error: "Not FOUND",
        });
      }
      let arr = [];
      componentIssues.forEach((issue) => arr.push(issue.transform()));
      res.json(arr);
    });
};

exports.updateRequestStatus = (req, res) => {
  let flag = false;
  let diff = 0;
  const old_status = req.issue.status;
  const new_status = req.body.status;

  if (old_status === "Requested") {
    if (new_status === "Issued" || new_status === "Denied") {
      flag = true;
      if (new_status === "Issued") {
        diff = req.body.num * -1;
      }
    } else {
      return res.status(400).json({
        error: "Component can be issued or denied.",
      });
    }
  } else if (old_status === "Issued") {
    if (new_status === "Collected") {
      flag = true;
    } else {
      return res.status(400).json({
        error: "Component should be collected by student.",
      });
    }
  } else if (old_status === "Collected") {
    if (new_status === "Returned") {
      diff = req.body.num;
      flag = true;
    } else {
      return res.status(400).json({
        error: "Component can be Returned or marked as Damaged.",
      });
    }
  } else {
    return res.status(400).json({
      error: "Operation not allowed.",
    });
  }

  if (flag) {
    req.issue.status = new_status;

    req.issue.save((err, updatedIssue) => {
      if (err) {
        return res.status(400).json({
          error: "Cannot update the status.",
        });
      }
      req.issue.component.available += diff;
      req.issue.component.issued -= diff;
      req.issue.component.save((err, updatedComponent) => {
        if (err) {
          return res.status(400).json({
            error: "Not able to update component.",
          });
        }
        res.json({
          msg: "Transaction successfull",
        });
      });
    });
  }
};

exports.getIssueById = (req, res, next, id) => {
  ComponentsIssue.findOne({ _id: id })
    .populate("user")
    .populate("component")
    .exec((err, issue) => {
      if (err) {
        return res.status(400).json({
          error: "Not FOUND",
        });
      }
      req.issue = issue;
      next();
    });
};

exports.getMyRequests = (req, res) => {
  ComponentsIssue.find({ user: req.user._id })
    .populate("component")
    .exec((err, myRequests) => {
      if (err) {
        return res.status(400).json({
          error: "Cannot find your requests.",
        });
      }
      res.json(myRequests);
    });
};

exports.getMyProjects = (req, res) => {
  user
    .findOne({ _id: req.user._id })
    .populate({ path: 'projects' ,populate: { path: 'members.user', select: 'name'}})
    .exec((err, user) => {
      if (err) {
        return res.status(400).json({
          error: "Cannot find your requests.",
        });
      }
      res.json(user.projects);
    });
};

exports.getMyInvites = (req, res) => {
  Project.find({ members: { $elemMatch: {user: req.user._id, accepted: false} } })
  .populate({ path: 'members.user', select: 'name'})
  .exec((err, projects) => {
    if(err){
      return res.status(400).json({
        error: err.message
      })
    }
    res.json(projects);
  });
};
exports.getMyDetails = (req, res) => {
  res.json(req.user);
};

exports.acceptInvite = (req, res) => {
  const projectId = req.params.projectId;
  const userId = req.user._id;
  Project.findOne({_id: projectId})
    .exec((err, project)=>{
      if (err || !project) {
        return res.status(400).json({
          error: "Project not found in DB",
        });
      }
      let isInvited = false;
      let i=0;
      for (;i<project.members.length;i++) {
        if (JSON.stringify(project.members[i].user) === JSON.stringify(userId)) {
          isInvited = true;
          break;
        }
      }
      if (!isInvited) {
        return res.status(400).json({
          error: "User not invited",
        });
      }
      project.members[i].accepted = true;
      project.save((err, updatedProject) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: "Cannot accept invite, try again",
          });
        }
        req.user.projects.push(projectId);
        req.user.save((err, updatedUser) => {
          if (err) {
            console.log(err);
            return res.status(400).json({
              error: "Cannot accept invite, try again",
            });
          }
        })
        res.json({
          msg: "Invite accepted",
        });
      });
    })
}
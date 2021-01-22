const { request } = require("express");
const ComponentsIssue = require("../models/issue");

exports.requestComponent = (req, res, next) => {
    let component = req.component;
    if(component.available<req.body.num){
        return res.status(400).json({
            error: "Not enough available."
          });
    }
    
    const componentIssue = new ComponentsIssue({
        component: req.component._id,
        reason: req.body.reason,
        user: req.user._id,
        num: req.body.num
    })

    componentIssue.save((err, componentIssue) => {
        if(err) {
            return res.status(400).json({
                error: "Cannot create component request."
            })
        }
        component.issued += req.body.num;
        component.available -= req.body.num;

        component.save((err, updatedComponent) => {
            if(err) {
                return res.status(400).json({
                    error: "Cannot complete component request."
                })
            }

            res.json({
                msg: `Successfully requested ${component.name}, wait for approval.`
            });
        })
    })
}

exports.getAllRequests = (req, res) => {
    ComponentsIssue.find({})
    .populate('user')
    .exec((err, componentsIssues) => {
        if (err) {
            return res.status(400).json({
              error: "NO product FOUND",
            });
          }
        res.json(componentsIssues);
    })
}

exports.updateRequestStatus = (req, res) => {
    requestId = req.params.requestId;

    ComponentsIssue.findByIdAndUpdate(
        requestId, 
        {status: req.body.status},
        (err, newStatus) => {
            if(err){
                return res.status(400).json({
                    error: "Cannot change status",
                });
            }
            res.json(`Request status changed to ${newStatus.status}`)
        })
}

exports.getMyRequests = (req, res) => {

    ComponentsIssue.find({user:req.user._id})
        .exec((err, myRequests) => {
            if(err){
                return res.status(400).json({
                    error: "Cannot find your requests.",
                });
            }
            res.json(myRequests)
        })
}
const express = require("express");
const { isSignedIn } = require("../middleware/auth");
const { getMyRequests, getMyProjects, getMyInvites, acceptInvite, getMyDetails, updateMyProfile } = require("../middleware/user");
const router = express.Router();
router.post('/my/updateProfile', isSignedIn, updateMyProfile)
router.get("/my/issue", isSignedIn, getMyRequests);
router.get("/my/details", isSignedIn, getMyDetails);
router.get("/my/invites/accept/:projectId", isSignedIn, acceptInvite);
router.get("/my/projects", isSignedIn, getMyProjects);
router.get("/my/invites", isSignedIn, getMyInvites);
module.exports = router;

const express = require("express");
const { isSignedIn, isAdmin } = require("../middleware/auth");
const { getMyRequests, getMyProjects, getMyInvites, acceptInvite, getMyDetails, updateMyProfile, getAllUsers, getSingleUser, deleteUser } = require("../middleware/user");
const router = express.Router();

router.get('/users', getAllUsers)
router.get('/users/:id', getSingleUser)
router.delete('/users/:id', isSignedIn, isAdmin, deleteUser)
router.post('/my/updateProfile', isSignedIn, updateMyProfile)
router.get("/my/issue", isSignedIn, getMyRequests);
router.get("/my/details", isSignedIn, getMyDetails);
router.get("/my/invites/accept/:projectId", isSignedIn, acceptInvite);
router.get("/my/invites", isSignedIn, getMyInvites);

module.exports = router;

const express = require("express");
const { isSignedIn, isAdmin } = require("../middleware/auth");
const {
  getMyRequests,
  getMyInvites,
  acceptInvite,
  getMyDetails,
  updateMyProfile,
  getAllUsers,
  getSingleUser,
  deleteUser,
  deleteNotification,
  updateProfileFromAdmin,
} = require("../middleware/user");
const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getSingleUser);
router.delete("/users/:id", isSignedIn, isAdmin, deleteUser);
router.post("/my/updateProfile", isSignedIn, updateMyProfile);
router.put("/users/:id", isSignedIn, isAdmin, updateProfileFromAdmin);
router.get("/my/issue", isSignedIn, getMyRequests);
router.post("/my/details", isSignedIn, getMyDetails);
router.get("/my/invites/accept/:projectId", isSignedIn, acceptInvite);
router.get("/my/invites", isSignedIn, getMyInvites);
router.post("/my/deleteNotification", isSignedIn, deleteNotification);

module.exports = router;

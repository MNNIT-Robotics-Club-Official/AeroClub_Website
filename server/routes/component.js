const express = require("express");
const router = express.Router();

const { getAllComponents, addComponent, updateComponent, getComponentById } = require("../middleware/component");
const { isSignedIn, isAdmin } = require("../middleware/auth");

//params
router.param("componentId", getComponentById);

//get routes
router.get("/components", getAllComponents);

// get a component
router.get('/components/:componentId', (req, res) => {
  res.json(req.component.transform())
})

//create route
router.post(
  "/component/add",
  isSignedIn,
  isAdmin,
  addComponent
);
// body:{name, type, image_url, available}

//update route
router.put(
  "/component/:componentId",
  isSignedIn,
  isAdmin,
  updateComponent
);

module.exports = router;
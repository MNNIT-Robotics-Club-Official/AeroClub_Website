const express = require("express");
const router = express.Router();

const { getAllComponents, addComponent, updateComponent, deleteComponent, getComponentById} = require("../middleware/component");
const { isSignedIn, isAdmin } = require("../middleware/auth");

//params
router.param("componentId", getComponentById);

//get routes
router.get("/component/all", getAllComponents);

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

  //delete route
  router.delete(
    "/component/:componentId",
    isSignedIn,
    isAdmin,
    deleteComponent
  );

module.exports = router;
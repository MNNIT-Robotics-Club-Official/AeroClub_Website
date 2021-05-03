const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const { getAllComponents, addComponent, updateComponent, deleteComponent, getComponentById, getAllComponentsFilter } = require("../middleware/component");
const { upload } = require('../middleware/fileUpload')
=======
const {
  getAllComponents,
  addComponent,
  updateComponent,
  deleteComponent,
  getComponentById,
  getAllComponentsFilter,
  upload,
} = require("../middleware/component");
>>>>>>> 23ee20c78e3b7513f2e7e5a372d1b0d0f9dfd8cf
const { isSignedIn, isAdmin } = require("../middleware/auth");

//params
router.param("componentId", getComponentById);

//get routes
router.get("/component", getAllComponents);
router.get("/component/filter", getAllComponentsFilter);

router.get("/component/:componentId", isSignedIn, (req, res) => {
  res.json(req.component.transform());
});

//create route
router.post("/component", isSignedIn, isAdmin, addComponent);
// body:{name, type, image_url, available}

//update route
router.put("/component/:componentId", isSignedIn, isAdmin, updateComponent);

//delete route
router.delete("/component/:componentId", isSignedIn, isAdmin, deleteComponent);

module.exports = router;

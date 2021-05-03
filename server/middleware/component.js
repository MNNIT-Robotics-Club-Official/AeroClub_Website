const Component = require("../models/component");
<<<<<<< HEAD
const { drivePicParser } = require("./fileUpload");
=======
let multer = require("multer");
const DIR = "../public/component";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, fileName);
  },
});
exports.upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
>>>>>>> 23ee20c78e3b7513f2e7e5a372d1b0d0f9dfd8cf

exports.getComponentById = (req, res, next, id) => {
  Component.findById(id).exec((err, comp) => {
    if (err) {
      return res.status(400).json({
        error: "Component not found in DB",
      });
    }
    req.component = comp;
    next();
  });
};

exports.getAllComponents = (req, res) => {
  res.setHeader("Content-Range", "component 0-10/20");
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  Component.find({}).exec((err, components) => {
    if (err) {
      return res.status(400).json({
        error: "Not FOUND",
      });
    }
    let arr = [];
    components.forEach((component) => arr.push(component.transform()));
    res.json(arr);
  });
};

exports.getAllComponentsFilter = (req, res) => {
  res.setHeader("Content-Range", "component 0-10/20");
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  Component.find({}).exec((err, dataList) => {
    if (err) {
      return res.status(400).json({
        error: "Not FOUND",
      });
    }
    let comps = {};
    dataList.forEach((comp) => {
      if (comps[comp.type] === undefined) comps[comp.type] = [];
      comps[comp.type].push(comp);
    });
    res.json(comps);
  });
};

exports.addComponent = (req, res) => {
  const pic = req.body.pic;
  if (pic) {
    try {
      req.body.pic = drivePicParser(req.body.pic);
    } catch (error) {
      return res.status(400).json({
        err: error.message,
      });
    }
  }
  const component = new Component({
    name: req.body.name,
    type: req.body.type,
<<<<<<< HEAD
    pic: req.body.pic,
=======
    image_url: req.body.image_url,
>>>>>>> 23ee20c78e3b7513f2e7e5a372d1b0d0f9dfd8cf
    available: req.body.available,
  });
  component.save((err, component) => {
    if (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
    res.send({
      msg: `${component.name} added successfully.`,
    });
  });
};

exports.updateComponent = (req, res) => {
<<<<<<< HEAD
  const component = req.component;
  component.available = req.body.available;
  const pic = req.body.pic;
  if (pic) {
    try {
      component.pic = drivePicParser(req.body.pic);
    } catch (error) {
      return res.status(400).json({
        err: error.message,
      });
    }
  }
  component.save((err, updatedComponent) => {
=======
  Component.findOneAndUpdate({ _id: req.params.componentId }, req.body, {
    new: true,
  }).exec((err, updatedComponent) => {
>>>>>>> 23ee20c78e3b7513f2e7e5a372d1b0d0f9dfd8cf
    if (err) {
      return res.status(500).json({ message: "Cannot delete component" });
    }
    res.json(updatedComponent.transform());
  });
};

exports.deleteComponent = (req, res) => {
  const component = req.component;
  component.remove((err, component) => {
    if (err) {
      return res.status(400).json({
        message: "Failed to delete this component",
      });
    }
    res.json(component);
  });
};

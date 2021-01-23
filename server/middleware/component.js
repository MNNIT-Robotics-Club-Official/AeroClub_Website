const Component = require("../models/component")

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

  res.setHeader('Content-Range', 'component 0-10/20')
  Component.find({}).exec((err, components) => {
    if (err) {
      return res.status(400).json({
        error: "NO product FOUND",
      });
    }
    let arr = [];
    components.forEach(component => arr.push(component.transform()))
    res.json(arr);
  });
};

exports.addComponent = (req, res) => {
  const component = new Component(req.body);
  component.save((err, component) => {
    if (err) {
      return res.status(400).json({
        err: err.message,
      });
    }
    res.send({
      msg: `${component.name} added successfully.`,
    });
  });
};

exports.updateComponent = (req, res) => {
  const component = req.component;
  component.available = req.body.available;

  component.save((err, updatedComponent) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update Component"
      });
    }
    res.json(updatedComponent);
  });
};

exports.deleteComponent = (req, res) => {
  const component = req.component;

  component.remove((err, component) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this component"
      });
    }
    res.json({
      msg: `Successfully deleted ${component.name}`
    });
  })
}
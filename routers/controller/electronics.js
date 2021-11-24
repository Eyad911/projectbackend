const electronicsTemplate = require("./../../db/models/electronicsSchema");
// add new Item
const addElectronics = (req, res) => {
  const { Name, Discription, Pic, Price,Kind } = req.body;
  const newElectronics = new electronicsTemplate({
    Name,
    Discription,
    Pic,
    Price,
    Kind
  });
  newElectronics
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
// read All Item
const getAllElectronics = (req, res) => {
  electronicsTemplate
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const getAccess = (req, res) => {
  const {Kind}= req.params
  electronicsTemplate
    .find({Kind})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
// delete one item
const deleteElectronics = (req, res) => {
  const { id } = req.params;

  electronicsTemplate
    .findOneAndRemove({ _id: id }, { new: true })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = { addElectronics, getAllElectronics, deleteElectronics, getAccess};

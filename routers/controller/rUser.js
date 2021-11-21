const signUpTemplateCopy = require("./../../db/models/signUpSchema");

const signUpUser = (req, res) => {
  const { fullName, userName, email, password } = req.body;
  const newUser = new signUpTemplateCopy({
    fullName,
    userName,
    email,
    password,
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllUsers = (req, res) => {
  signUpTemplateCopy.find({}).then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { fullName, userName, email, password } = req.body;

  signUpTemplateCopy
    .findOneAndUpdate(
      { _id: id },
      { fullName, userName, email, password },
      { new: true }
    )
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  

  signUpTemplateCopy.findOneAndRemove(
      { _id: id },
      { new: true }
    )
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = { signUpUser, updateUser ,getAllUsers,deleteUser};

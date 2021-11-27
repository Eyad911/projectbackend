const signUpTemplateCopy = require("./../../db/models/signUpSchema");
const bcrybt = require("bcrypt");

const signUpUser = async (req, res) => {
  const { fullName, userName, email, password } = req.body;

  // const saltPass = await bcrybt.genSalt(10);
  // const securePass = await bcrybt.hash(req.body.password,saltPass);

  signUpTemplateCopy.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json("Email already there");
    } else {
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
    }
  });
};
const findUserByEmail = (req, res) => {
  const { email } = req.params;
  signUpTemplateCopy
    .find({ email: `${email}` })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//log in function here

const login = (req, res) => {
  let valid = signUpTemplateCopy.find((item) => {
    return req.body.email == item.email && req.body.password == item.password;
  });

  if (valid) {
    res.status(200).json({ status: true });
  } else {
    res
      .status(200)
      .json({ status: false, errMessage: "Incorrect Email or Password" });
    console.log(false);
  }
};

const getAllUsers = (req, res) => {
  signUpTemplateCopy
    .find({})
    .then((result) => {
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

  signUpTemplateCopy
    .findOneAndRemove({ _id: id }, { new: true })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};



const removeUserCart = (req, res) => {
  const { email, _id } = req.params;
  signUpTemplateCopy
    .findOneAndUpdate(
      { email: email },
      { $pull: { favoriteSchema: _id } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const cartUsercheck = (req, res) => {
  const { email, ObjectId } = req.params;
  signUpTemplateCopy.findOne({ ObjectId: req.params.ObjectId }).then((user) => {
   
    signUpTemplateCopy
        .findOneAndUpdate(
          { email: email },
          { $push: { favoriteSchema: ObjectId } },
          { new: true }
        )
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });

  });
};

const getCart = (req, res) => {
  const { email } = req.params;
  signUpTemplateCopy
    .find({ email: email })
    .populate("favoriteSchema")
    .exec()
    .then((result) => {
      res.send(result[0].favoriteSchema);
    })
    .catch((err) => {
      res.send(err);
    });
};

//edit user name
const editFullName = (req, res) => {
  const { email } = req.params;
  const { fullName } = req.body;
  signUpTemplateCopy
    .findOneAndUpdate(
      { email: `${email}` },
      { $set: { fullName } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  signUpUser,
  updateUser,
  getAllUsers,
  deleteUser,
  login,
  findUserByEmail,
  editFullName,
  
  getCart,
  cartUsercheck,
  removeUserCart
};

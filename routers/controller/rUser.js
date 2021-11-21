const signUpTemplateCopy = require("./../../db/models/signUpSchema");

const signUpUser = (req, res) => {
  const { fullName, userName, email, password } = req.body;
  const newUser = new signUpTemplateCopy({
    fullName,
    userName,
    email,
    password,
  });
  newUser.save().then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.send(err);
  });
};



module.exports = {signUpUser}

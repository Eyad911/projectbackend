const electronicsTemplate = require("./../../db/models/electronicsSchema");

const electronics = (req, res) => {
  const { Name, Discription, Pic, Price } = req.body;
  const newElectronics = new electronicsTemplate({
    Name, Discription, Pic, Price
  });
  newElectronics.save().then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.send(err);
  });
};


const getAllElectronics = (req, res) => {
  electronicsTemplate.find({}).then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};



module.exports = {electronics,getAllElectronics}
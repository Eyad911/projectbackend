# projectbackend
backEnd douc
# what we use to run our Server

Express.

## Ru our Server 

we use 
```
npm run dev
```

## Controller :
some of our Controller

### Electronics Control
```
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

```

### Users Control

```
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

```

## Routes :
some of our Routes

### Electronics Route


```
electronicsRouter.post('/addni', addElectronics);
electronicsRouter.get('/', getAllElectronics);
electronicsRouter.get('/:kind',getAccess)
electronicsRouter.delete('/delete',deleteElectronics);

```

### Users Route

```
signUpRouter.post("/signup", signUpUser);
signUpRouter.post('/login',login);
signUpRouter.put("/update/:id", updateUser);
signUpRouter.delete("/delete/:id", deleteUser);
signUpRouter.get("/", getAllUsers);
signUpRouter.get("/email/:email", findUserByEmail);
signUpRouter.put("/edit/:email", editFullName);
signUpRouter.put("/yourcart/:email/:ObjectId", cartUsercheck);

```


## our DataBase:

we use mongo db

```
  mongoose.connect(`${DB}`, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);

```


### Schemas 
User Schema

```
const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required: true, unique:true },
  email: { type: String, required: true,unique:true  },
  password: { type: String, required: true },
  favoriteSchema: [{ type: mongoose.Schema.Types.ObjectId, ref: "electronics" }],
  date: { type: Date, default: Date.now },
});


module.exports = mongoose.model("signUp", signUpTemplate);
```




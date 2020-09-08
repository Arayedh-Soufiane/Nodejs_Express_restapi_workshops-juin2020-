const express = require("express");

const app = express();
//parse the data
app.use(express.json());
app.use(express.static("public"));

let users = [
  {
    name: "Jhon doe",
    age: 40,
    id: 0,
  },
  {
    name: "Jane doe",
    age: 25,
    id: 1,
  },
  {
    name: "Anis Meliti",
    age: 20,
    id: 2,
  },
  {
    name: "Ameni hkiri",
    age: 26,
    id: 3,
  },
  {
    name: "hejer laouani",
    age: 17,
    id: 4,
  },
  {
    name: "sarra guesmi",
    age: 9,
    id: 5,
  },
];

//@GET /api/users
//@desc list of users
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});
//@POST /api/users
//@desc ADD A USER
app.post("/api/users", (req, res) => {
  // logique add user
  // user input   ,  id
  let newUser = { ...req.body, id: Math.random() };
  users.push(newUser);
  res.status(200).json({
    msg: "User added with success",
    users,
  });
});

//@DELETE /api/users/:id
//@desc remove User by id
app.delete("/api/users/:id", (req, res) => {
  let id = Number(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.json({
    msg: "User with the id " + id + " has been deleted",
    users,
  });
});

//@PUT /api/users/:id
//@desc edit user by id
app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  users = users.map((user) =>
    user.id === id ? { ...user, ...req.body } : user
  );
  res.status(200).json({
    msg: "user has been edited",
    users,
  });
});

// Starting The Server
const port = 5000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`The server is running on port ${port}....`);
});

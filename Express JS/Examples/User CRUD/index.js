const express = require("express");
const users = require("./users.json");
const app = express();


// /users -> all users
app.get('/users', (request, response) => {
    response.json(users);
});

// /users/id -> one user of specific id from all users
app.get('/users/:id', (request, response) => {
    const id = request.params.id;
    response.json(users.find(user => user.id == id));
});

// to start server on 8000
app.listen(8000, () => {
    console.log("Server is started on http://localhost:8000");
});

const express = require("express");
const users = require("./users.json");
const app = express();

app.get('/users', (request, response) => {
    response.json(users);
});

app.get('/users/:id', (request, response) => {
    const id = request.params.id;
    response.json(users.find(user => user.id == id));
});

app.listen(8000, () => {
    console.log("Server is started on http://localhost:8000");
});

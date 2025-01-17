const express = require("express");
const fs = require("fs");
const users = require("./users.json");
const app = express();

app.use(express.urlencoded({ extended: false }));

// /users -> all users
app.get('/users', (request, response) => {
    response.json(users);
});

// /users/id -> one user of specific id from all users
app.get('/users/:id', (request, response) => {
    const id = request.params.id;
    response.json(users.find(user => user.id == id));
});

// to add user
app.post('/users', (request, response) => {
    // const { first_name, last_name, email, gender, job_title } = request.body;

    // if (!first_name || !last_name || !email || !gender || !job_title) {
    //     response.status(400);
    //     response.json({ error: 'All fields are required' });
    // }

    const body = request.body;
    users.push(body);
    console.log(body);
    fs.writeFile("./users.json", JSON.stringify(users), (err, data) => {
        return response.json({ 'status': 'User added !', 'err': err });
    });


});

// to remove user
app.delete('/users/:id', (request, response) => {

    const id = request.params.id;
    let i = 0;
    while (i < users.length) {
        if (users[i].id == id) {
            users.splice(i, 1);
        }
        i++;
    }
    fs.writeFile("./users.json", JSON.stringify(users), (err) => {
        return response.json({ 'status': 'user deleted on ', 'id': id });
    });
});

// to start server on 8000
app.listen(8000, () => {
    console.log("Server is started on http://localhost:8000");
});

// krish,keyur,ravi,jils,jenish,divyesh :-
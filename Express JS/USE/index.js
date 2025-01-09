const express = require("express");
const app = express();

app.get('/', (request, response) => {
    response.send("This is home page !");
});

app.post('/login', (request, response) => {
    response.json(request.query);
});



app.listen(8000, () => {
    console.log("Server started on http://localhost:8000");
});
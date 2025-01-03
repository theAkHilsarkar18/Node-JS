const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((request, response) => {

    const log = Date.now() + " : New request received -> " + request.url + "\n";

    fs.writeFile("./Built-in Modules/URL/log.txt", log, (err, data) => {

        switch (request.url) {
            case '/':
                response.end("Home Page");
                break;
            case '/about':
                response.end("About Page");
                break;
            case '/profile':
                response.end("Profile Page");
                break;
            default:
                response.end("404 Not Foune d");
        }

    });
});

server.listen(8000, () => {
    console.log("Server started on http://localhost:8000");
});
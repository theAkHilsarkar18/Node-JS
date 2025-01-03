const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "application/json");

    const parsedUrl = url.parse(request.url);
    console.log(parsedUrl);

    if (request.method === "GET") {
        response.statusCode = 200;
        response.end(JSON.stringify({ "msg": "Hello World" }));
    } else if (request.method === "POST") {
        response.statusCode = 201;
        response.end(JSON.stringify({ 'msg': 'Data inserted successfully !' }));
    }
    else {
        response.statusCode = 404;
        response.end(JSON.stringify({ "err": "Not Found" }));
    }
});

const port = 8000;

server.listen(port, 'localhost', () => {
    console.log(`Server is running at http://localhost:${port}`);
})
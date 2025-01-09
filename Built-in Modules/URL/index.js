const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((request, response) => {

    response.setHeader('Content-Type', 'application/json');

    const parsedUrl = url.parse(request.url);
    const params = new URLSearchParams(parsedUrl.query);


    console.log(parsedUrl);

    if (request.method == 'GET') {
        response.statusCode = 200;
        const json = JSON.stringify({
            'method': "GET",
            'message': 'Request Done !',
            'status code': 200
        });
        response.end(json);
    }
    else if (request.method == 'POST' && parsedUrl.pathname == '/login') {

        const auth = {};
        params.forEach((value, key) => {
            console.log(key, value);
            auth[key] = value;
        });

        const json = JSON.stringify({
            'method': "POST",
            'message': 'Request Done !',
            'status code': 201,
            'auth': auth
        });

        fs.appendFile('./Built-in Modules/URL/user.txt', JSON.stringify(auth) + "\n", (err) => {
            console.log(err);
        });
        const data = fs.readFile('./Built-in Modules/URL/user.txt', (err) => {
            // console.log(err)
        })
        console.log(data);
        response.statusCode = 201;
        response.end(json);
    }
    else {
        response.statusCode = 404;
        const json = JSON.stringify({
            'error': 'Not Found !',
            'status code': 404
        });
        response.end(json);
    }
});


server.listen(8000, () => {
    console.log("Your server is started on http://localhost:8000");
}); 
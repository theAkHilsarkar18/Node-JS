const http = require("http");
const url = require("url");

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
        const query = params.forEach((value, key) => {
            auth.push(value);
        });

        const json = JSON.stringify({
            'method': "POST",
            'message': 'Request Done !',
            'status code': 201,
            'auth': auth
        });

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
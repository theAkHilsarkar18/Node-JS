const http = require("http");

const server = http.createServer(
    (request, response) => {
        // set types of response
        // response.setHeaders('Content-Type', 'text/plain');
        response.setHeader('Content-Type', 'application/json');

        // define types of request
        if (request.method === 'GET') {
            response.statusCode == 200;
            response.end(JSON.stringify({ message: "Response generated successfully !", method: "GET" }));
        }
        else {
            res.statusCode = 404;
            response.end(JSON.stringify({ message: "PAGE NOT FOUND" }));
        }
    }
);

const port = 8000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost: ${port}`);
});
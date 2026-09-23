// //Http Module :- 





// // step 1 import

const http = require("http");

const fs = require("fs");

// // // step 2 create server


const server = http.createServer((request, response) => {

    if (request.url == "/") {

        response.end("Welcome to the jungle ");

    } else if (request.url == "/about" && request.method == "POST") {

        response.end("About Page");

    } else if (request.url == "/contact") {

        response.end("Contact Page");

    } else if (request.url == "/data" && request.method == "GET") {

        const data = fs.readFileSync("./1.json", "utf-8");

        response.end("data");

    } else {

        response.end("Not found")

    }

});

// step 3 listen


server.listen(8080, () => {

    console.log("server started")

});








const express = require("express");

const app = express();

const port = 1337;

const dir = `${__dirname}/public/`;

// Static files 
app.use(express.static("public"));
app.use(express.static("public/data"));
app.use(express.static("public/images"));
app.use(express.static("public/scripts"));
app.use(express.static("public/styles"));

// Routing
app.get("/", (request, response) => {
    response.sendFile(`${dir}index.html`);
});

app.get("/index", (request, response) => {
    response.sendFile(`${dir}index.html`);
});

app.get("/about", (request, response) => {
    response.sendFile(`${dir}about.html`);
});

app.get("/booking", (request, response) => {
    response.sendFile(`${dir}booking.html`);
});

app.get("/contact", (request, response) => {
    response.sendFile(`${dir}contact.html`);
});

app.get("/portfolio", (request, response) => {
    response.sendFile(`${dir}portfolio.html`);
});

app.get("/*", (request, response) => {
    response.sendFile(`${dir}404.html`);
});

app.listen(port, () => {
    console.log(`Server is Started at port : ${port} (http://localhost:${port})`);
});

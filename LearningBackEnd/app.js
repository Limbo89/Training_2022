const express = require('express');
const app = express();
const njk = require("nunjucks");

const Blog = require('./routes/blog');

const PORT = 3000;

njk.configure('templates', {
    autoescape: true,
    express: app
});

app.use("/blog", Blog);

app.get("/", (req, res) => {
    res.send("Главная страница");
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server's started on http://localhost:${PORT}`);
    }
});
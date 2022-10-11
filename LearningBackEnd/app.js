const express = require('express');
const app = express();

const Blog = require('./routes/blog');

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Главная страница");
});
app.get("/blog", Blog);
app.get("/blog/:record", Blog);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server's started on http://localhost:${PORT}`);
    }
});
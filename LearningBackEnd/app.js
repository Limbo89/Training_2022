const express = require('express'),
    app = express(),
    njk = require("nunjucks"),
    Blog = require('./routes/blog'),
    User = require('./routes/user'),
    session = require('express-session'),
    MyBlog = require('./routes/myBlog'),
    PORT = 3000,
    mongoose = require('mongoose');

njk.configure('templates', {
    autoescape: true,
    express: app
});

app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: 'you secret key',
        resave: true,
        saveUninitialized: true,
    })
);

app.use("/blog", Blog);
app.use("/registration", (req, res) => {
    res.render("registration.njk");
});
app.use("/login", (req, res) => {
    res.render("login.njk");
});
app.use("/user", User);
app.use("/myBlog", MyBlog);

app.get("/", (req, res) => {
    res.send("Главная страница<br><a href='/myBlog'>myBlog</a><br><a href='/login'>login</a><br><a href='/registration'>registration</a><br><a href='blog'>blog</a>");
});
app.use((req, res) => {
    res.send("404");
});

mongoose.connect("mongodb://localhost:27017/userbd", { useUnifiedTopology: true }, (err) => {
    if (!err){
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Server's started on http://localhost:${PORT}`);
            }
        });
    } else {
        console.log(err + "Ошибка в подключении к базе данных");
    }
});


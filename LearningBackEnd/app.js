const express = require('express'),
    app = express(),
    njk = require("nunjucks"),
    Blog = require('./routes/blog'),
    User = require('./routes/user'),
    session = require('express-session'),
    MyBlog = require('./routes/myBlog'),
    PORT = 3000,
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    oneDay = 1000 * 60 * 60 * 24,
    redisStore = require('connect-redis')(session),
    redis = require('redis'),
    client = redis.createClient({
        legacyMode: true
    });

njk.configure('templates', {
    autoescape: true,
    express: app
});

app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: 'you secret key',
        store: new redisStore({
            host: '127.0.0.1',
            port: 6379,
            client: client,
            ttl: 260
        }),
        saveUninitialized: true,
        cookie: {
            maxAge: oneDay
        },
        resave: false,
    })
);

app.use(cookieParser());
app.use((req, res, next) => {
    // let unauth = ['/', '/blog']
    // let session = req.session;
    // if (!unauth.includes(req.url) && session.user) {
    //     next()
    // } else if (unauth.includes(req.url)) {
    //     next()
    // }    
    // else {
    //     res.send("Вы не авторизованы")
    // }
    // next(); 
    console.log(req.url);
    next();
});
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
    const sess = req.session;
    console.log(sess);
    res.send("Главная страница<br><a href='/myBlog'>myBlog</a><br><a href='/login'>login</a><br><a href='/registration'>registration</a><br><a href='blog'>blog</a>");
});
app.use((req, res) => {
    res.send("404");
});

mongoose.connect("mongodb://localhost:27017/userbd", { useUnifiedTopology: true }, (err) => {
    if (!err) {
        client.connect();
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


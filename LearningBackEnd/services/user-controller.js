const { render } = require("nunjucks");
const User = require("../models/user-model");
const session = require('express-session');

class UserController {
    constructor() {
    }
    async logout(req, res) {
        delete req.session.user;
        res.redirect("/login");
    }
    async getAllUsers(req, res) {
        User.find({}, function (err, allUsers) {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            } else {
                res.redirect("http://localhost:3000");
                console.log(allUsers);
            }
        });
    }
    async authUser(req, res) {
        User.find({}, function (err, allUsers) {
            allUsers.forEach(user => {
                if (req.body.login == user.name && req.body.password == user.password) {
                    req.session.user = {
                        name: user.name,
                        auth: true,
                    }
                }
            });
            if (req.session.user) {
                res.redirect("/myBlog");
            } else {
                res.render("login.njk", { status: "Такого пользователя нет!" });
            }
        });
    }
    async addUser(req, res) {
        const user = new User({ name: req.body.login, password: req.body.password });
        user.save(function (err) {
            if (err) {
                return console.log(err);
            }
            res.redirect("/login");
        });
    }
}

module.exports = UserController;
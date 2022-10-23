const express = require('express');
const session = require('express-session');
const Router = express.Router();
const controller = require("../services/blog-controller");

const BlogController = new controller();

class MyBlog {
    constructor() {
        Router.get("/", this.userBlog);
    }
    async userBlog(req, res){
        if (session.user) {
            console.log(session.user.auth);
            BlogController.userBlogs(req, res);
        } else {
            res.redirect("http://localhost:3000/login");
        }
    }
}

new MyBlog();
module.exports = Router;
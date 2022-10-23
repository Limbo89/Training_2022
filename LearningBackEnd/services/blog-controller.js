const { render } = require("nunjucks");
const session = require('express-session');
const Blog = require("../models/blog-model");

class BlogController {
    constructor() {
    }
    async createBlog(req, res) {
        let author = session.user.name;
        let title = req.body.title;
        let description = req.body.description;
        const blog = new Blog({ title, description, author });
        blog.save(function (err) {
            if (err) {
                return console.log(err);
            }
        })
        res.redirect("/myBlog");
    }
    async allBlogs(req, res) {
        Blog.find({}, function (err, allBlogs) {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            } else {
                console.log(allBlogs);
                res.render("index.njk", { blogs: allBlogs });
            }
        });
    }
    async userBlogs(req, res) {
        Blog.find({}, function (err, allBlogs) {
            let currentBlogs = [];
            allBlogs.forEach(blog => {
                if (blog.author == session.user.name) {
                    currentBlogs.push(blog);
                }
            });
            res.render("userBlogs.njk", {blogs: currentBlogs});
        });
    }
}

module.exports = BlogController;
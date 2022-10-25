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
    async deleteBlog(req, res) {
        Blog.deleteOne({ _id: req.params.id }, (err) => {
            if (!err) {
                res.redirect('/myBlog');
                console.log("Успешное удаление!");
            } else {
                console.log(err);
            }
        });
    }
    async updateBlog(req, res) {
        console.log(req.body.title, req.body.description, req.body.id);
        Blog.updateOne({ _id: req.body.id }, { title: req.body.title, description: req.body.description }, (err) => {
            if (!err) {
                res.redirect('/myBlog');
                console.log("Успешное обновление!");

            } else {
                console.log(err);
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
            res.render("userBlogs.njk", { blogs: currentBlogs });
        });
    }
}

module.exports = BlogController;
const express = require('express');
const Router = express.Router();
const controller = require("../services/blog-controller");

const BlogController = new controller();

class Blog {
    constructor () {
        Router.get('/', this.getBlogs);
        Router.post('/update', this.updateBlog);
        Router.get('/delete/:id', this.deleteBlog);
        Router.post('/create_blog', this.createBlog);
        Router.get('/:id', this.getIdBlog);
        Router.get('/user/:name', this.getUserBlogs);
    }
    async updateBlog(req, res) {
        BlogController.updateBlog(req, res);
    }
    async deleteBlog(req, res) {
        BlogController.deleteBlog(req, res);
    }
    async createBlog(req, res) {
        BlogController.createBlog(req, res);
    }
    async getUserBlogs(req, res) {
        BlogController.userBlogs(req, res, req.params.name);
    }
    async getBlogs(req, res) {
        BlogController.allBlogs(req, res);
    }
    async getIdBlog(req, res) {
        BlogController.getBlog(req, res);
    }
}

new Blog();
module.exports = Router;
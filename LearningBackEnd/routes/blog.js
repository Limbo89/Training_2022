const express = require('express');
const Router = express.Router();

class Blog {
    constructor () {
        Router.get('/blog', this.getBlog);
        Router.get('/blog/:record', this.record);
    }
    async getBlog(req, res) {
        res.send("Все записи");
    }
    async record(req, res) {
        res.send("Запись " + req.params.record);
    }
}

new Blog();
module.exports = Router;
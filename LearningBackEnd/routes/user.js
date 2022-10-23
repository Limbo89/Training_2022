const express = require('express');
const Router = express.Router();
const controller = require("../services/user-controller");

const UserController = new controller();

class User {
    constructor() {
        Router.get("/getAll", this.getUsers);
        Router.get("/logout", this.logout);
        Router.post("/auth", this.authentication);
        Router.post("/registration", this.userReg);
    }
    async logout(req, res) {
        UserController.logout(req, res);
    }
    async getUsers(req, res) {
        UserController.getAllUsers(req, res);
    }
    async authentication(req, res) {
        UserController.authUser(req, res);
    }
    async userReg(req, res) {
        UserController.addUser(req, res);
    }

    async userLogin(req, res) {
        UserController.userLogin(req, res);
    }
}

new User();
module.exports = Router;
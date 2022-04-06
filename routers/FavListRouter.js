const { createList, getAll, getByUser, addItem, deleteList } = require('../controllers/FavListController');
const { isAuthenticated } = require('../middlewares/auth');

const api = require('express').Router();

api.post("/", isAuthenticated, createList);
api.get("/", isAuthenticated, getAll);
api.get("/:id", isAuthenticated, getByUser);
api.post("/:id", isAuthenticated, addItem);
api.delete("/:id", isAuthenticated, deleteList);

module.exports = api;
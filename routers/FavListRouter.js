const { createList, getAll, getByUser, addItem, deleteList } = require('../controllers/FavListController');
const { checkAuth } = require('../middlewares/auth');

const api = require('express').Router();

api.post("/", checkAuth, createList);
api.get("/", checkAuth, getAll);
api.get("/:id", checkAuth, getByUser);
api.post("/:id", checkAuth, addItem);
api.delete("/:id", checkAuth, deleteList);

module.exports = api;
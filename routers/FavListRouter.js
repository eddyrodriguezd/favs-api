const { createList, getAll, getByUser, addItem, deleteList } = require('../controllers/FavListController');

const api = require('express').Router();

api.post("/", createList);
api.get("/", getAll);
api.get("/:id", getByUser);
api.post("/:id", addItem);
api.delete("/:id", deleteList);

module.exports = api;
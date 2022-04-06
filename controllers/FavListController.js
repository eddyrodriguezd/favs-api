const FavListService = require('../services/FavListService');

const createList = async (req, res) => {
    const favList = await FavListService.createList(req.body, req.user);
    res.status(200).send({ action: 'New favorite\'s list created', data: favList });
}

const getAll = async (req, res) => {
    res.status(200).send({ action: 'All favorite\'s list retrieved', data: null });
}

const getByUser = async (req, res) => {
    res.status(200).send({ action: 'Favorite\'s list from user <{}> retrieved', data: null });
}

const addItem = async (req, res) => {
    res.status(200).send({ action: 'Item added to Favorite\'s List <{}>', data: null });
}

const deleteList = async (req, res) => {
    res.status(200).send({ action: 'Favorite\'s List <{}> deleted', data: null });
}

module.exports = {
    createList,
    getAll,
    getByUser,
    addItem,
    deleteList
};
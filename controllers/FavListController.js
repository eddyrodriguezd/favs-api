const FavListService = require('../services/FavListService');

createList = async (req, res) => {
    res.status(200).send({ action: 'New favorite\'s list created', data: null });
}

getAll = async (req, res) => {
    res.status(200).send({ action: 'All favorite\'s list retrieved', data: null });
}

getByUser = async (req, res) => {
    res.status(200).send({ action: 'Favorite\'s list from user <{}> retrieved', data: null });
}

addItem = async (req, res) => {
    res.status(200).send({ action: 'Item added to Favorite\'s List <{}>', data: null });
}

deleteList = async (req, res) => {
    res.status(200).send({ action: 'Favorite\'s List <{}> deleted', data: null });
}

module.exports = {
    createList,
    getAll,
    getByUser,
    addItem,
    deleteList
};
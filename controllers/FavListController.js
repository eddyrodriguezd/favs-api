const { saveList, findAllLists, findListsByUser, addItemToList, removeList } = require('../services/FavListService');

const createList = async (req, res) => {
    const favList = await saveList(req.body, req.user);
    res.status(200).send({ message: 'New favorite\'s list created', data: favList });
}

const getAll = async (req, res) => {
    const favLists = await findAllLists();
    res.status(200).send({ message: 'All favorite\'s list retrieved', data: favLists });
}

const getByUser = async (req, res) => {
    const favLists = await findListsByUser(req.user);
    res.status(200).send({ message: `Favorite\'s lists from user <${req.user._id}> retrieved`, data: favLists });
}

const addItem = async (req, res) => {
    res.status(200).send({ message: 'Item added to Favorite\'s List <{}>', data: null });
}

const deleteList = async (req, res) => {
    res.status(200).send({ message: 'Favorite\'s List <{}> deleted', data: null });
}

module.exports = {
    createList,
    getAll,
    getByUser,
    addItem,
    deleteList
};
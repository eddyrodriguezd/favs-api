const { saveList, findAllLists, findOneList, addItemToList, removeList } = require('../services/FavListService');

const createList = async (req, res) => {
    const favList = await saveList(req.body, req.user);
    res.status(200).send({ message: 'New favorite\'s list created', data: favList });
}

const getAll = async (req, res) => {
    const favLists = await findAllLists(req.user);
    res.status(200).send({ message: 'All favorite\'s list retrieved', data: favLists });
}

const getOne = async (req, res) => {
    const listId = req.params.id;
    const favList = await findOneList(req.user, listId);

    if (favList === null) {
        res.status(400).send({ message: `No Favorite\'s list available for id <${listId}>`, data: null });
    }
    else {
        res.status(200).send({ message: `Favorite\'s list with id <${listId}> retrieved`, data: favList });
    }
}

const addItem = async (req, res) => {
    const listId = req.params.id;
    const newFav = req.body;
    const updated = await addItemToList(req.user, listId, newFav);

    if (!updated) {
        res.status(400).send({ message: `No Favorite\'s list available for id <${listId}>`, data: null });
    }
    else {
        res.status(200).send({ message: `Item added to Favorite\'s list with id <${listId}>`, data: newFav });
    }
}

const deleteList = async (req, res) => {
    const listId = req.params.id;
    const deleted = await removeList(req.user, listId);

    if (!deleted) {
        res.status(400).send({ message: `No Favorite\'s list available for id <${listId}>`, data: null });
    }
    else {
        res.status(200).send({ message: `Favorite\'s List with id <${listId}> deleted`, data: null });
    }
}

module.exports = {
    createList,
    getAll,
    getOne,
    addItem,
    deleteList
};
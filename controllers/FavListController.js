const FavListService = require('../services/FavListService');

const createList = async (req, res) => {
    try {
        const favList = await FavListService.saveList(req.body, req.user);
        res.status(200).send({ message: 'New favorite\'s list created', data: favList });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}

const getAll = async (req, res) => {
    const favLists = await FavListService.findAllLists(req.user);

    if (favLists.length == 0) {
        res.status(200).send({ message: 'No list created yet' });
    }
    else {
        res.status(200).send({ message: 'All favorite\'s lists retrieved', data: favLists });
    }
}

const getOne = async (req, res) => {
    const listId = req.params.id;
    const favList = await FavListService.findOneList(req.user, listId);

    if (favList === null) {
        res.status(400).send({ error: `No Favorite\'s list available for id <${listId}>` });
    }
    else {
        res.status(200).send({ message: `Favorite\'s list with id <${listId}> retrieved`, data: favList });
    }
}

const addItem = async (req, res) => {
    const listId = req.params.id;
    const newFav = req.body;

    try {
        const updated = await FavListService.addItemToList(req.user, listId, newFav);
        if (!updated) {
            res.status(400).send({ error: `No Favorite\'s list available for id <${listId}>` });
        }
        else {
            res.status(200).send({ message: `Item added to Favorite\'s list with id <${listId}>`, data: newFav });
        }
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}

const deleteList = async (req, res) => {
    const listId = req.params.id;
    const deleted = await FavListService.removeList(req.user, listId);

    if (!deleted) {
        res.status(400).send({ error: `No Favorite\'s list available for id <${listId}>` });
    }
    else {
        res.status(200).send({ message: `Favorite\'s List with id <${listId}> deleted` });
    }
}

module.exports = {
    createList,
    getAll,
    getOne,
    addItem,
    deleteList
};
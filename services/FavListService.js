const FavListSchema = require('../models/FavList');

const saveList = async ({ name, favs }, user) => {
    if (name === undefined) throw new Error('Name parameter is missing');
    if (favs === undefined) throw new Error('Favs parameter is missing');
    if (favs.length === 0) throw new Error('Favs array must have at least one element');

    const favList = new FavListSchema({ name, favs, user });

    const favListCreated = await favList.save();
    console.log(`Fav List <${JSON.stringify(favListCreated)}> created`);
    return favListCreated;
};

const findAllLists = async (user) => {
    const favLists = await FavListSchema.findByUser(user._id);
    console.log(`Fav Lists: <${JSON.stringify(favLists)}> from user <${user}> retrieved`);
    return favLists;
};

const findOneList = async (user, listId) => {
    const favList = await FavListSchema.findByUserAndId(user._id, listId);
    if (favList.length === 0) return null;

    console.log(`Fav List: <${JSON.stringify(favList[0])}> from user <${user}> retrieved`);
    return favList[0];
}

const addItemToList = async (user, listId, { title, description, link }) => {
    if (title === undefined) throw new Error('Title parameter is missing');
    if (description === undefined) throw new Error('Description parameter is missing');
    if (link === undefined) throw new Error('Link parameter is missing');

    const updateParams = await FavListSchema.addFavToList(user._id, listId, { title, description, link });
    return updateParams.modifiedCount === 1;
}

const removeList = async (user, listId) => {
    const deleteParams = await FavListSchema.removeFavList(user._id, listId);
    return deleteParams.deletedCount === 1;
}

module.exports = {
    saveList,
    findAllLists,
    findOneList,
    addItemToList,
    removeList
};
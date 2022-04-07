const FavListSchema = require('../models/FavList');

const saveList = async ({ name, favs }, user) => {
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

const addItemToList = async (user, listId, fav) => {
    const updateParams = await FavListSchema.addFavToList(user._id, listId, fav);
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
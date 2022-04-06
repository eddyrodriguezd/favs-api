const FavListSchema = require('../models/FavList');

const saveList = async ({ name, favs }, user) => {
    const favList = new FavListSchema({ name, favs, user });

    const favListCreated = await favList.save();
    console.log(`Fav List <${JSON.stringify(favListCreated)}> created`);
    return favListCreated;
};

const findAllLists = async () => {
    const favLists = await FavListSchema.find({});
    console.log(`Fav Lists: <${JSON.stringify(favLists)}> retrieved`);
    return favLists;
};

const findListsByUser = async (user) => {
    const favLists = await FavListSchema.findByUser(user._id);
    console.log(`Fav Lists: <${JSON.stringify(favLists)}> from user <${user}> retrieved`);
    return favLists;
}

const addItemToList = (listId, user) => {
    return null;
}

const removeList = (listId, user) => {
    return null;
}

module.exports = {
    saveList,
    findAllLists,
    findListsByUser,
    addItemToList,
    removeList
};
const FavListSchema = require('../models/FavList');

const saveList = async ({ name, favs }, user) => {
    const favList = new FavListSchema({ name, favs, user });

    const favListCreated = await favList.save();
    console.log(`Fav List<${JSON.stringify(favListCreated)}> created`);

    return favListCreated;
};

const findListByUser = (user) => {
    return FavListSchema.findByUser(user.id);
}

module.exports = {
    saveList,
    findListByUser
};
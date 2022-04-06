const FavListSchema = require('../models/FavList');

const createList = ({ name, favs }, user) => {
    const favList = new FavListSchema({ name, favs, user });
    return favList;
};

const getByUser = (user) => {
    return FavListSchema.findByUser(user.id);
}

module.exports = {
    createList,
    getByUser
};
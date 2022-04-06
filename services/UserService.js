const UserSchema = require('../models/User');

const { createAccessToken } = require('../services/JwtService');

const createUser = ({ email, password }) => {
    const user = new UserSchema({ email, password });

    const userCreated = user.save();

    return userCreated;
};

const getToken = async ({ email, password }) => {
    const user = await UserSchema.findOne({ email });

    if (password !== user.password) {
        return undefined;
    }

    const token = createAccessToken(user);
    return token;
}

module.exports = {
    createUser,
    getToken
};
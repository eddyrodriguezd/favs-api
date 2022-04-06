const UserSchema = require('../models/User');

const { createAccessToken } = require('../services/JwtService');

const createUser = ({ email, password }) => {
    const user = new UserSchema({ email, password });

    const userCreated = user.save();

    return userCreated;
};

const getToken = async ({ email, password }) => {
    if (email === undefined || password === undefined) return undefined;

    const user = await UserSchema.findOne({ email });

    if (user === null) return undefined;

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) return undefined;

    const token = createAccessToken(user);
    return token;
}

const getById = async (id) => {
    return await UserSchema.findById(id);
}

module.exports = {
    createUser,
    getToken,
    getById
};
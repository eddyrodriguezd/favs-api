const { createUser, getToken } = require('../services/UserService');

const register = async (req, res) => {
    const user = await createUser(req.body);
    res.status(200).send({ action: 'New user created', data: user });
}

const login = async (req, res) => {
    const token = await getToken(req.body);
    res.status(200).send({ action: 'Successful login', token });
}

module.exports = {
    register,
    login
};
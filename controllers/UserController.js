const { createUser, getToken } = require('../services/UserService');

const register = async (req, res) => {
    const user = await createUser(req.body);
    res.status(200).send({ message: 'New user created', data: user });
}

const login = async (req, res) => {
    const token = await getToken(req.body);

    if (token === undefined) {
        return res.status(401).json({
            message: "Invalid credentials",
        });
    }

    res.status(200).send({ message: 'Successful login', token });
}

module.exports = {
    register,
    login
};
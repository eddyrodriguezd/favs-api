const moment = require('moment');

const { getById } = require('../services/UserService');
const { decodeToken } = require('../services/JwtService');

const secret = process.env.JWT_SECRET_KEY;

const isAuthenticated = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'Missing Authentication Token' });
    }

    const token = req.headers.authorization.replace(/['"]+/g, "");

    try {
        const payload = decodeToken(token, secret);
        console.log('JWT Decoded: ', JSON.stringify(payload));

        if (payload.exp <= moment.unix()) {
            return res.status(403).send({ message: 'Token expired' });
        }

        req.user = await getById(payload.id);

    } catch (ex) {
        console.log('Exception while authenticating ', ex);
        return res.status(403).send({ message: 'Invalid Token' });
    }

    next();
};

module.exports = {
    isAuthenticated
};
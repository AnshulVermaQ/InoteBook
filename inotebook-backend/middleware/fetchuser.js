const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryisagoodb$oy';

const fetchuser = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}

module.exports = fetchuser;

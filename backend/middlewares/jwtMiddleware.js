// middleware to check that admin is loggedin or not the jwt is valid or not coming in cookie or not 
const jwt = require("jsonwebtoken");

function jwtMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token." });
    }   
}

module.exports = jwtMiddleware;
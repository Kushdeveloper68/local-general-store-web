const jwt = require("jsonwebtoken");

function jwtMiddleware(req, res, next) {
  let token = null;

  // 1️⃣ Check cookie first
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  // 2️⃣ If no cookie, check Authorization header
  if (!token && req.headers.authorization) {
    const authHeader = req.headers.authorization;

    if (authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }
  }

  // 3️⃣ If still no token → deny
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

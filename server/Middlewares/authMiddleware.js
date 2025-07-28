const jwt = require('jsonwebtoken');
 
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');  // Get token from Authorization header
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });  // Deny access if no token
    }
    try {
        const decoded = jwt.verify(token, 'secrtekey123');  // Verify token
        req.employee = decoded;  // Attach decoded employee info to req object
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });  // Deny access if token is invalid
    }
};
 
module.exports = authMiddleware;  // Export the middleware


// const jwt = require('jsonwebtoken');
 
// const authMiddleware = (req, res, next) => {
//     const token = req.header('Authorization').replace('Bearer ', '');  // Get token from Authorization header
//     if (!token) {
//         return res.status(401).json({ message: 'No token, authorization denied' });  // Deny access if no token
//     }
//     try {
//         const decoded = jwt.verify(token, 'secrtekey123');  // Verify token
//         req.employee = decoded;  // Attach decoded employee info to req object
//         next();  // Proceed to the next middleware or route handler
//     } catch (error) {
//         res.status(401).json({ message: 'Token is not valid' });  // Deny access if token is invalid
//     }
// };
 
// module.exports = authMiddleware;  // Export the middleware
 






// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//     const token = req.header('Authorization').replace('Bearer ', '');  // Get token from Authorization header
//     if (!token) {
//         return res.status(401).json({ message: 'No token, authorization denied' });  // Deny access if no token
//     } 
//     try {
//         const decoded = jwt.verify(token, 'secrtekey123');  // Verify token secrtekey123
//         req.user = decoded;  // Attach decoded user info to req object
//         next();  // Proceed to the next middleware or route handler
//     } catch (error) {
//         res.status(401).json({ message: 'Token is not valid' });  // Deny access if token is invalid
//     }
// };

// module.exports = authMiddleware;  // Export the middleware

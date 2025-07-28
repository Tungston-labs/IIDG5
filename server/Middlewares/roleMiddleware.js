const roleMiddleware = (roles) => (req, res, next) => {
    // Check if the user's role is included in the allowed roles
    if (!roles.includes(req.employee.role)) {
        return res.status(403).json({ message: 'Access denied' });  // Deny access if role doesn't match
    }
    next();  // Proceed to the next middleware or route handler
};
module.exports = roleMiddleware;  // Export the middleware

// const roleMiddleware = (roles) => (req, res, next) => {
//     // Check if the user's role is included in the allowed roles
//     if (!roles.includes(req.employee.role)) {
//         return res.status(403).json({ message: 'Access denied' });  // Deny access if role doesn't match
//     }
//     next();  // Proceed to the next middleware or route handler
// };
// module.exports = roleMiddleware;  // Export the middleware



// const roleMiddleware = (roles) => (req, res, next) => {
//     // Check if the user's role is included in the allowed roles
//     if (!roles.includes(req.user.role)) {
//         return res.status(403).json({ message: 'Access denied' });  // Deny access if role doesn't match
//     }
//     next();  // Proceed to the next middleware or route handler
// };

// module.exports = roleMiddleware;  // Export the middleware

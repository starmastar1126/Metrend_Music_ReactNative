const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(' ')[1];
        jwt.verify(token, '8z6xw%C&?m<Md', (err, auth) => {
            if (err) {
                console.log("Token Authentication Failed");
                res.status(401).json({
                    status_code: 401,
                    error: "Authentication Failed"
                });
            } else {
                console.log("Token Verified");
                next();
            }
        });
    } else {
        console.log("Header Not Found");
        res.status(401).json({
            status_code: 401,
            error: "Authentication Failed"
        });
    }
}

function authenticateToken(req, res, next) {
    console.log('authenticating');
    req.user = 'test user';
    next();
}

module.exports = {
    authenticateToken,
};
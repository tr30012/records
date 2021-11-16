const Exceptions = require("../exceptions");
const TokenService = require("../services/token.service")
const logger = require("../logger");

module.exports = (request, response, next) => {
    try {
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            return next(Exceptions.UnauthorizedError());
        }

        const accessToken = authHeader.split(' ')[1];

        if (!accessToken) {
            return next(Exceptions.UnauthorizedError());
        }

        const userData = TokenService.validateAccessToken(accessToken);

        if (!userData) {
            return next(Exceptions.UnauthorizedError());
        }

        request.user = userData;

        next();
    }
    catch (error) {
        return next(Exceptions.UnauthorizedError());
    }
}


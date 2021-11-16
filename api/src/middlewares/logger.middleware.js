const logger = require("../logger");
const Exceptions = require("../exceptions");

module.exports = (request, response, next) => {
    try {
        const { rawHeaders, httpVersion, method, socket, url, body } = request;
        const { remoteAddress, remoteFamily } = socket;

        logger.info(
            JSON.stringify({
                timestamp: Date.now(),
                rawHeaders,
                httpVersion,
                method,
                remoteAddress,
                remoteFamily,
                url,
                body
            }, null, 2)
        );

        next();
    }
    catch (error) {
        next(Exceptions.BadRequest(error.message, error))
    }
}
const Exceptions = require("../exceptions")
const logger = require("../logger")

module.exports = (error, request, response, next) => {
    if (error instanceof Exceptions) {
        return response.status(error.status).json({
            message: error.message,
            errors: error.errors
        })
    }

    logger.error(error)

    return response.status(500).json({
        message: "Internal server error"
    })
}
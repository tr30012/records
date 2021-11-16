module.exports = class Exceptions extends Error {

    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);

        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new Exceptions(401, "Unauthorized user request");
    }

    static BadRequest(message, errors = []) {
        return new Exceptions(400, message, errors);
    }
}
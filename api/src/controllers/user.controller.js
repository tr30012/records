const UserService = require("../services/user.service");
const Exceptions = require("../exceptions");

module.exports = class {
    static async update(req, res, next) {
        try {
            if (req.params.id !== req.user.id) {
                next(Exceptions.BadRequest("You can update only your account"));
            }

            const {username, email, password} = req.body;
            const answer = await UserService.update(
                req.user.id,
                username,
                password,
                email
            )
            return res.json(answer);
        }
        catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            if (req.params.id !== req.user.id) {
                next(Exceptions.BadRequest("You can delete only your account"));
            }

            const answer = await UserService.delete(req.user.id);
            return res.json(answer);
        }
        catch (error) {
            next(error);
        }
    }

    static async get(req, res, next) {
        try {
            if (req.params.id !== req.user.id) {
                next(Exceptions.BadRequest("You cat get only your account"));
            }

            const answer = await UserService.get(req.user.id);
            return res.json(answer);
        }
        catch (error) {
            next(error);
        }
    }
}

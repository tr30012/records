const Exceptions = require("../exceptions");
const PostService = require("../services/post.service");

module.exports = class {
    static async create(req, res, next) {
        try {
            const {title, desc, photo} = req.body;
            const answer = await PostService.create(title, desc, req.user.username, photo);
            return res.json(answer);
        }
        catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const has = await PostService.has(req.user.username, req.params.id);

            if (!has) {
                next(Exceptions.BadRequest("No post to update"));
            }

            const {title, desc, photo} = req.body;
            const answer = await PostService.update(req.params.id, title, desc, photo);

            return res.json(answer);
        }
        catch (error) {
            next(error);
        }
    }

    static async getall(req, res, next) {
        try {
            const answer = await PostService.get({});
            return res.json(answer);
        }
        catch (error) {
            next(error);
        }
    }

    static async get(req, res, next) {
        try {
            const answer = await PostService.get({_id: req.params.id});
            return res.json(answer[0]);
        }
        catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const has = await PostService.has(req.user.username, req.params.id);

            if (!has) {
                next(Exceptions.BadRequest("No post to delete"));
            }

            const answer = await PostService.delete(req.params.id);
            return res.json(answer);
        }
        catch (error) {
            next(error);
        }
    }
}
const UserModel = require("../models/User");
const PostModel = require("../models/Post");
const Exceptions = require("../exceptions");


module.exports = class {
    static async create(title, desc, username, photo) {
        const post = await PostModel.create({
            title: title,
            desc: desc,
            username: username,
            photo: photo
        });
        return post.save();
    }

    static async update(postid, title, desc, photo) {
        const post = await PostModel.findById(postid);

        if (!post) {
            throw Exceptions.BadRequest("No posts with id");
        }

        post.title = title;
        post.desc = desc;
        post.photo = photo;

        return post.save();
    }

    static async delete(postid) {
        const post = await PostModel.findById(postid);

        if (!post) {
            throw Exceptions.BadRequest("No posts with id");
        }

        return post.delete();
    }

    static async get(filter) {
        return PostModel.find(filter);
    }

    static async has(username, postid) {
        const post = await PostModel.findById(postid);
        return post && (post.username === username);
    }
}
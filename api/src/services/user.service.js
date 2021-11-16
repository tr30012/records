const UserModel = require("../models/User");
const PostModel = require("../models/Post");
const Exceptions = require("../exceptions");
const bcrypt = require("bcrypt");

module.exports = class {
    static async update(userid, username, password, email){
        let user = await UserModel.findById(userid);

        if (!user) {
            throw Exceptions.BadRequest(`No user found with id: ${userid}`);
        }

        if (user.username !== username) {
            user = await UserModel.findOne({username: username});

            if (user) {
                throw Exceptions.BadRequest(`User with name: ${username} already exists`);
            }
        }

        if (username) {
            user.username = username;
        }

        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        if (email) {
            user.email = email;
        }

        return user.save();
    }

    static async delete(userid) {
        const user = await UserModel.findById(userid);

        if (!user) {
            throw Exceptions.BadRequest(`No user found with id: ${userid}`);
        }

        await PostModel.deleteMany({username: user.username});
        await UserModel.findByIdAndDelete(userid);

        return "Deleted";
    }

    static async get(userid) {
        return UserModel.findById(userid);
    }

}
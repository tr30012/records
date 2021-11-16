module.exports = class {

    username;
    email;
    id;

    constructor(user) {
        this.id = user._id;
        this.email = user.email;
        this.username = user.username;
    }
}
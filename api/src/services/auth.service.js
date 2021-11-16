const bcrypt = require("bcrypt");
const Exceptions = require("../exceptions");
const UserModel = require("../models/User");
const UserDTO = require("../dtos/user.dto");
const TokenService = require("../services/token.service");
const logger = require("../logger");

module.exports = class {
    static async register(username, password, email) {
        const user = await UserModel.findOne({username: username});

        if (user) {
            throw Exceptions.BadRequest(`User ${username} already exists`);
        }

        const hashPassword = await bcrypt.hash(password, 3);

        const dtoUser = new UserDTO(await UserModel.create({
            username: username,
            password: hashPassword,
            email: email
        }));

        const tokens = TokenService.generateJWTPair({
            ...dtoUser
        })

        await TokenService.saveRefreshToken(dtoUser.username, tokens.refresh)
        return {
            ...tokens,
            ...dtoUser
        }
    }

    static async login(username, password) {
        const user = await UserModel.findOne({username: username});

        if (!user) {
            throw Exceptions.BadRequest(`No user: ${username} found`);
        }

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) {
            throw Exceptions.BadRequest(`Incorrect password or login`);
        }

        const dtoUser = new UserDTO(user)
        const tokens = TokenService.generateJWTPair({
            ...dtoUser
        });

        await TokenService.saveRefreshToken(user.username, tokens.refresh)
        return {
            ...tokens,
            ...dtoUser
        }
    }

    static async refresh(token) {
        if (!token) {
            throw Exceptions.UnauthorizedError()
        }

        const userData = TokenService.validateRefreshToken(token)
        const tokenFromDb = await TokenService.findRefreshToken(token)

        if (!userData || !tokenFromDb) {
            throw Exceptions.UnauthorizedError()
        }

        const user = await UserModel.findById(userData.id)
        const dtoUser = new UserDTO(user)

        const tokens = TokenService.generateJWTPair({
            ...dtoUser
        })

        await TokenService.saveRefreshToken(dtoUser.username, tokens.refresh)
        return {
            ...tokens,
            ...dtoUser
        }
    }

    static async logout(token) {
        await TokenService.removeRefreshToken(token);
    }
}
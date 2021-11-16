const jwt = require("jsonwebtoken")
const tokenModel = require("../models/RefreshToken")

module.exports = class TokenService {
    static generateJWTPair(payload) {
        const access = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, {
            expiresIn: process.env.JWT_ACCESS_LIFETIME,
        });
        const refresh = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY, {
            expiresIn: process.env.JWT_REFRESH_LIFETIME
        });
        return { access, refresh };
    }

    static validateAccessToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY);
        }
        catch (error) {
            return null;
        }
    }

    static validateRefreshToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET_KEY);
        }
        catch (error) {
            return null;
        }
    }

    static async saveRefreshToken(username, refreshToken) {
        let token = await tokenModel.findOne({ user: username });

        if (token) {
            token.token = refreshToken;
            return token.save();
        }

        token = await tokenModel.create({
            username: username, token: refreshToken
        });
        return token;
    }

    static async removeRefreshToken(token) {
        await tokenModel.findOneAndDelete({ token: token});
    }

    static async findRefreshToken(refreshToken) {
        return tokenModel.findOne({token: refreshToken});
    }

    static decode(token) {
        return jwt.decode(token);
    }
}
const AuthService = require("../services/auth.service");

module.exports = class {
    static async login(req, res, next) {
        try {
            const {username, password} = req.body;
            const answer = await AuthService.login(username, password);
            return res.cookie('refreshToken', answer.refresh, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: false
            }).json(answer);
        }
        catch (error) {
            next(error);
        }
    }

    static async register(req, res, next) {
        try {
            const {username, password, email} = req.body;
            const answer = await AuthService.register(username, password, email);
            return res.cookie('refreshToken', answer.refresh, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: false
            }).json(answer);
        }
        catch (error) {
            next(error);
        }
    }

    static async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const answer = await AuthService.refresh(refreshToken);
            return res.cookie('refreshToken', answer.refresh, {
                        maxAge: 30 * 24 * 60 * 60 * 1000,
                        httpOnly: false
                    }).json(answer);
        }
        catch (error) {
            next(error);
        }
    }

    static async logout(req, res, next) {
        try {
            const {token} = req.cookies;
            await AuthService.logout(token);
            return res.clearCookie("refreshToken").json({
                logout: true
            });
        }
        catch (error) {
            next(error);
        }
    }
}
module.exports = (origin, callback) => {
    if (process.env.CLIENT_URL.indexOf(origin) !== 1) {
        callback(null, true);
    }
    else {
        callback(new Error("Not allowed by cors"));
    }
}
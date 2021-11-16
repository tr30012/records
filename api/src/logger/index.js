const pino = require("pino");
const dayjs = require("dayjs")

module.exports = pino({
    prettyPrint: true,
    base: { pid: false },
    timestamp: () => {
        return ",\"time\":\"" + dayjs().format() + "\""
    }
});

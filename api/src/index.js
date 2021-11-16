const cors = require("cors");
const path = require("path");
const multer = require("multer");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cookieparser = require("cookie-parser");

const routes = require("./routes")
const origin = require("./origin")
const logger = require("./logger");
const exceptions = require("./middlewares/exceptions.middleware");

dotenv.config();

logger.info(JSON.stringify(process.env));

const app = express();

app.use(express.json());
app.use(cookieparser());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "images"));
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

app.use("/images", express.static(path.join(__dirname, "images")));

logger.info(path.join(__dirname, "images"));

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.use("/api", routes);
app.use(exceptions);

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:true
    })
    .then(() => logger.info("Connected to MongoDB"))
    .catch((err) => logger.error(err));

app.listen(process.env.PORT, () => {
    logger.info(`Server started at: http://localhost:${process.env.PORT}`);
})




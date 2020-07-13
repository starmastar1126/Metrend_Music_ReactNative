const multer = require("multer");

const MIME_TYPE_MAP = {
    "video/mp4": "mp4",
    "video/x-msvideo": "avi"
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, "public/trailers");
    },
    filename: (req, file, cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");
        cb(null, Date.now() + "-" + name);
    }
});

module.exports = multer({ storage: storage }).single("trailer");

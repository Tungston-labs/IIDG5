const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype === "text/csv") cb(null, "uploads");
    else if (file.mimetype.startsWith("image/")) cb(null, "uploads");
    else cb(new Error("Only CSV or images allowed"), false);
  },
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "text/csv" || file.mimetype.startsWith("image/")) cb(null, true);
  else cb(new Error("Only CSV or images allowed"), false);
};

module.exports = multer({ storage, fileFilter });

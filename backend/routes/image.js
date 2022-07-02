const express = require("express");
const multer = require("multer");
const router = express.Router();

router.post("/upload", (req, res) => {
  res.status(200).send("image");
  console.log(req.file);
  const upload = multer({
    dest: "public/",
  });

  const uploadImage = upload.single("photo");
});

module.exports = router;

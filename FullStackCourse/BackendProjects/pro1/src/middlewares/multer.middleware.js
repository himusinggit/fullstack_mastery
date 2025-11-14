import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname,ext);
    cb(null, base + '-' + uniqueSuffix+ext)
  }
})

export const upload = multer({ storage: storage })
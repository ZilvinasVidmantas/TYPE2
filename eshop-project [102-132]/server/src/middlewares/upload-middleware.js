const multer = require('multer');

const storage = multer.diskStorage({
  // BŪTŲ GALIMA VAROTOJO NUOTRAUKAS DĖTI Į SPECIFINĮ APLANKĄ, PVZ. PAGAL ID
  // TUOMET PAPILDOMAI REIKTŲ SUKURTI APSAUGAS, KAD TIK TAS VARTOTOJAS
  // ARBA ADMINAS GALĖTŲ PASIEKTI TĄ APLANKĄ
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    const { originalname } = file;
    const extension = originalname.slice(originalname.indexOf('.'));
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + extension);
  }
});

const upload = multer({ storage });

const uploadManyMiddleware = (name) => upload.array(name);
const uploadSingleMiddleware = (name) => upload.single(name);

module.exports = {
  uploadManyMiddleware,
  uploadSingleMiddleware
};
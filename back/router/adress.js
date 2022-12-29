const router = require('express').Router();
const Adress = require('./../model/Adress')
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './rasmlar')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })

const upload = multer({storage:storage})
router.get('/adress', async (req, res) => {
    try {
        const adresslar = await Adress.find();

        res.status(200).json(adresslar)
    } catch (e) {
        res.status(500).json({
            message: 'Bazaga boglanishda hatolik',
            error: e.message
        })
    }
})


router.post('/adress', upload.single('img'), async (req, res) => {
    try {
        const {title, subtitle, img, lat, long} = req.body;
        const newadress = await Adress.create({title, img: req.file.path, subtitle, lat, long});
        res.status(201).json(newadress)
    } catch (e) {
        res.status(500).json({
            message: 'Bazaga boglanishda hatolik',
            error: e.message
        })
    }
})


module.exports = router;
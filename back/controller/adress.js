const Adress = require('./../model/Adress')


exports.delAdress = async (req,res,next) =>{
    try {
        const id = req.params.id;

        await Adress.findByIdAndDelete(id);

        res.status(200).json({
            message: "Ma'lumot o'chirildi."
        })
        
    } catch (e) {
        res.status(500).json({
            message: "Baza bilan bog'liq mumamo mavjud",
            error: e.message
        })
    }
} 

exports.getOneAdress = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const adress = await Adress.findById(id);

        res.status(200).json({
            message: 'Element topildi',
            adress
        })
    } catch (e) {
        res.status(500).json({
            message: "Baza bilan bog'liq mumamo mavjud",
            error: e.message
        })
    }
} 
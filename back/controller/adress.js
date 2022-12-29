const Adress = require('./../model/Adress')
exports.addAdress = async (req,res,next) =>{
    try {
        
    } catch (e) {
        res.status(500).json({
            message: "Baza bilan bog'liq mumamo mavjud",
            error: e.message
        })
    }
} 
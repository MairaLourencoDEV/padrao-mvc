const empreendedoras = require("../models/empreendedoras.js");

const getAllEmpreendedoras = (req,res) => {
    empreendedoras.find((err, empreendedoras) => {
        res.status(200).json(empreendedoras);
    })
};

const createEmpreendedoras = (req, res) => {
    let empreendedora = new empreendedoras(req.body);

    empreendedora.save((err) => {
        if(err){
            res.status(500).send({messege: `${err.message} - falha ao ao cadastrar empreendedora`})
        }else {
            res.status(201).send(empreendedora.toJSON())
        }
    })
};
module.exports = {
    getAllEmpreendedoras, createEmpreendedoras
}











const picture = require('../models/picture')

const fs = require('fs')
exports.create = async (req,res) => {
 
     try{
           const {name} = req.body

           const file = req.file
           const Picture = new picture({
             name,
             src: file.path,
           })

           await Picture.save()

           res.status(201).json({message: 'Imagem salva com sucesso', picture})
     } 
     catch(err){
         res.status(500).json({message: `erro ao salvar imagem ${err}`})
     }
};

exports.findall = async (req, res) => {
     try{
       
        const pictures = await picture.find();
        res.status(200).json(pictures)
     }
     catch(err){
         res.status(500).json({message: `Erro ao buscar imagens ${err}`})
     }
};

exports.remove = async (req,res) => {
     try{
       
       const Picture = await picture.findById(req.params.id)

       if(!Picture){
         return res.status(404).json({message: 'Imagem não encontrada'})
       }

       if (fs.existsSync(Picture.src)) {
        fs.unlinkSync(Picture.src); // Remove o arquivo do sistema de arquivos
    } else {
        console.warn(`Arquivo não encontrado em ${Picture.src}, prosseguindo com a remoção do documento.`);
    }

    await picture.findByIdAndDelete(req.params.id)// Remove o documento do banco de dados

     res.status(200).json({message: 'Imagem removida com sucesso'})
       
     }
     catch(err){
         res.status(500).json({message: `Erro ao remover imagem ${err}`})
     }

    
}
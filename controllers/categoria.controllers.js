const Categoria  = require('../models/Categoria.js');  
const Usuario = require('../models/Usuario.js');

const getCategorias = async(req, res) => {
    try {
        const request = await Categoria.find();
        res.send(request);
    } catch (error) {
        res.status(500);
        res.send(error);
    };
    
}

const getOneCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findOne({ _id: req.params.id });
        res.json(categoria);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}
const postCategoria = async(req, res ) => {

    const nombre = req.body.nombre.toUpperCase();

    const categoriaDB = await Categoria.findOne({ nombre });

    if ( categoriaDB ) {
        return res.status(400).json({
            msg: `La categoria ${ categoriaDB.nombre }, ya existe`
        });
    }
   /*  console.log("usuario:",usuario); */
    // Generar la data a guardar
    const data = {
        nombre,
        usuario: req.usuario._id
    }

    
    const categoria = new Categoria( data );

    // Guardar DB
    await categoria.save();

    res.status(201).json(categoria);

}

const deleteCategoria = async (req, res) => {
    try {
        const {id} = req.params;
            const categoria = await Categoria.findByIdAndUpdate(id, {estado:false});
            res.json(categoria);
        
    } catch (error) {
        res.status(500).send(error);
    }
}

const putCategoria = async(req, res) => {
    try {
        const {id} = req.params;
        const {_id, estado, usuario, ...resto} = req.body;
        const categoria = await Categoria.findByIdAndUpdate(id, resto);
        res.json({
            msg:"Categoria Actualizado",
            categoria : categoria
        });
    } catch (error) {
        console.log(error);
    };
    
}

module.exports = {
    getCategorias,
    getOneCategoria,
    postCategoria,
    deleteCategoria,
    putCategoria
}
const {Schema, model} = require('mongoose');

const CheeseSchema = Schema({
    name:{
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    state : {
        type: Boolean,
        required: [true, 'El estado es obligatorio']
    },
    usuario: {
        tpye: Schema.Types.ObjectId,
        required: [true, 'El usuario es obligatorio']
    },
    price: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    },
    categoria: {
        type: Schema.Types.ObjectId,
        required: [true, 'la categoria es obligatorio']
    },
    description: {
        type: String,
        required: false
    }
});

module.exports = model('Cheese', CheeseSchema);
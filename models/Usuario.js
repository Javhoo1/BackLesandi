const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    user_name: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true 
    },
    grade: {
        type: String,
        require: true 
    },
    institution: {
        type: String,
        require: false 
    }
});

module.exports = model('Usuario', UsuarioSchema);
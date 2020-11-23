const mongoose = require('mongoose');

const dbConnection = async() => {

    try{
        mongoose.connect( process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');


    } catch (error) {
        
        console.log(error);
        throw new Error('Error, no es posible conectar a la BD');

    }
}

module.exports = {
    dbConnection
}
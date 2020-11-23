const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

//CREAR SERVIDOR EXPRESS

const app = express();

// BD
dbConnection();

//CORS
app.use(cors())

//DIRECTORIO PUBLICO
app.use( express.static('public'));


//LECTURA
app.use( express.json());

//RUTAS
app.use('/api/auth', require('./routes/auth') );
// TODO: CRUD: Eventos



//LEER PETICIONES
app.listen(process.env.PORT, () => {
    console.log(`Servidor en puerto ${ process.env.PORT }`);
});
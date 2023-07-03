
//IMPORTACIÓN DE LA VARIABLE APP POR MEDIO DE MODULOS
import app from './server.js'
import connection from './database.js';
connection()
//eJECUTAR EL SERVIDOR POR MEDIO DEL PUERTO PORT
app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})

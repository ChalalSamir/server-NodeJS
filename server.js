/* 
Imports
 */
require('dotenv').config(); // Variable d'environnement
const express = require('express'); // Configuration du serveur
const ejs = require('ejs'); // Moteur de template
const path = require('path'); // Gestion du dossier client


const {mainRouter} = require('./routes/main.routeur');
//


/* 
Configuration
*/
// Création d'unne variable pour le serveur
const server = express();
// Définition du port
const port = process.env.PORT;
// Configurer le dossier www
server.set('views', __dirname + '/www');
server.use( express.static(path.join(__dirname , 'www'))); 
// configurer le mode de rendu
server.set( 'view engine' , 'ejs'); 
server.use(`/`, mainRouter);
//


/* 
Lancer le serveur
*/
server.listen( port, () => {
    console.log(`Server listening on port ${port}.`);
});
//



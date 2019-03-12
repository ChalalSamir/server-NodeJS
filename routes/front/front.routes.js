/* 
Imports
*/
    const express = require('express');
    const frontRouter = express.Router();
//


/* 
Configuration
*/
    class FrontRouterClass{
        constructor(){};

        routes(){
            // Configurer la homepage
            frontRouter.get( `/`, (req, res) => {
                // Rendre le fichier index
                res.render(`index`);
            });

            // Configurer la info utilisateur
            frontRouter.get( `/me`, (req, res) => {
                // Rendre le fichier index
                res.render(`me`);
            });
        };

        init(){
            // Laner la méthode routes
            this.routes();
            // renvoyer le router
            return frontRouter;
        };
    }
//


/* 
Export
*/
    module.exports = { FrontRouterClass };
//
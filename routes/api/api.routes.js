/* 
Imports
*/
    const express = require('express');
    const ApiRouter = express.Router();
//


/* 
Configuration
*/
    class ApiRouterClass{
        constructor(){};

        routes(){
            // Configurer la homepage
            ApiRouter.get( `/`, (req, res) => {
                // renvoyer des données en json 
                res.json( {msg: `Hello API`, data: [`NodeJS` , `API`] } );
            });
        };

        init(){
            // Laner la méthode routes
            this.routes();
            // renvoyer le router
            return ApiRouter;
        };
    }
//


/* 
Export
*/
    module.exports = { ApiRouterClass };
//
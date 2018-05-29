        // ************************************************************************
        // ***                                                                  ***
        // *** Objet : ToolBox                                                  ***
        // ***                                                                  ***
        // *** Cet objet cpontient différentes méthodes générales               ***
        // *** Il s'entichira au fur et à mesure du temps de nouvelles méthodes ***
        // ***                                                                  ***
        // *** - 1 Générateur de nombre aléatoire :                             ***
        // ***     - random(ValeurInférieure, ValeurSupérieure                  ***
        // ***                                                                  ***
        // ***  Nécessite :                                                     ***
        // ***      Une variable pour son instanciation                         ***
        // ***                                                                  ***
        // ************************************************************************
        // --------------------------------------------------------------
        function ToolBox(){
                this. screenWidth;              // Largeur de l'écran visible du navigateur
                this.screenHeight;              // Hauteur de l'écran visible du navigateur
        }
        // --------------------------------------------------------------
        // Méthodes prototypées de l'objet "ToolBox"
        // --------------------------------------------------------------
        ToolBox.prototype.random = function(pValInf, pValSup){
            return Math.round(((pValSup - pValInf) * Math.random()) + pValInf);
        }
        // --------------------------------------------------------------
        ToolBox.prototype.getScreenSize = function(pValInf, pValSup){
                
// XXXXXXXXXXXXXXXXXXXXXXXXX
        //        if (document.body){
        // alert('A')
        //          screenWidth = (document.body.clientWidth);
        //          screenHeight = (document.body.clientHeight);
        //        } else {
        // alert('B')
                this.screenWidth = (window.innerWidth);
                this.screenHeight = (window.innerHeight);
        //          }       
        // alert('screenWidth : '+screenWidth+' screenHeight : '+screenHeight);
        }
        // --------------------------------------------------------------
// XXXXXXXXXXXXXXXXXXXXXXXXX
        // document.body.style.zoom="200%";
        // --------------------------------------------------------------
        

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
        ToolBox.prototype.openCV = function(event){
console.log(event);
        console.log(event.originalTarget.id === 'idCVcourt');
        console.log(dataBipBip.targetActif === (dataBipBip.maxCompetences-1));

            if (event.originalTarget.id === 'idCVLong'){
                open('./index3.html', 'CV', 'directories=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,toolbar=yes');
            } else {
                if ((event.originalTarget.id === 'idCVcourt') && (dataBipBip.targetActif === (dataBipBip.maxCompetences-1))){
                    open('./index2.html', 'CV', 'directories=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,toolbar=yes');
                }
            }   
            
        }

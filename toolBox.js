
        // ************************************************************************
        // ***                                                                  ***
        // *** Objet : ToolBox                                                  ***
        // ***                                                                  ***
        // *** Cet objet contient différentes méthodes générales variées et trop***
        // *** peu nombreuses pour definir une catégorie spécifique             ***
        // *** Il s'enrichiera au fur et à mesure du temps de nouvelles méthodes***
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
                
// XXXXXXXXXXXXXXXXXXXXXXXXX A travailler sur multi browser
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
            var eventId;
            if (event.srcElement){
                eventId = event.srcElement.id;          // Pour Chrome et affilies
            } else {
                eventId = event.originalTarget.id;      // Pour Firefox
            }

            if (eventId === 'idCVLong'){
                open('./index3.html', 'CV', 'directories=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,toolbar=yes');
            } else {
                if ((eventId === 'idCVcourt') && (dataBipBip.targetActif === (dataBipBip.maxCompetences-1))){
                    open('./index2.html', 'CV', 'directories=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,toolbar=yes');
                }
            }   
            
        }
        // --------------------------------------------------------------
        // Polyfill pour MSIE qui n'accepte pas la fonction Math.sign
        // --------------------------------------------------------------
        ToolBox.prototype.sign = function(x){
            return !(x= parseFloat(x)) ? x : x > 0 ? 1 : -1;
        };

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
            this.screenWidth;              // Largeur de l'écran visible du navigateur
            this.screenHeight;             // Hauteur de l'écran visible du navigateur
            this.sensVertical = true;      // Constante pour la converseioon Pourcentages / pixels
            this.sensHorizontal = false;     // Constante pour la converseioon Pourcentages / pixels
        }
        // --------------------------------------------------------------
        // Méthodes prototypées de l'objet "ToolBox"
        // --------------------------------------------------------------
        ToolBox.prototype.random = function(pValInf, pValSup){
            return Math.round(((pValSup - pValInf) * Math.random()) + pValInf);
        }
        // --------------------------------------------------------------
        // Polyfill pour MSIE qui n'accepte pas la fonction Math.sign
        // --------------------------------------------------------------
        ToolBox.prototype.sign = function(x){
            return !(x = parseFloat(x)) ? x 
                                        : x > 0 ? 1 
                                                : -1;
        };
        // --------------------------------------------------------------
        ToolBox.prototype.getScreenSize = function(){
            this.screenWidth = (window.innerWidth);
            this.screenHeight = (window.innerHeight);
        }
        // --------------------------------------------------------------
        ToolBox.prototype.refreshScreen = function(){   
            this.getScreenSize();
            window.location.href = window.location.href; // Apres un redimensionnement de l'écran, je le régénère from scratch;
        }
        // --------------------------------------------------------------
        ToolBox.prototype.convertPercentToPixels = function(pValue,pSensVertical){   
            return pSensVertical    ? (toolBox.screenHeight / (100 / pValue))
                                    : (toolBox.screenWidth / (100 / pValue));
        }
        // --------------------------------------------------------------
        ToolBox.prototype.openCV = function(event){
            var eventId = event.srcElement  ? event.srcElement.id          // Pour Chrome et affiliés
                                            : event.originalTarget.id;     // Pour Firefox
console.log('eventId : ',eventId);

            switch (eventId) {
                case 'idCVLongBtn':
                    open('./index3.html', 'CV', 'directories=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,toolbar=yes');
                    break;
                case 'idCVcourtBtn':
                    if ((dataBipBip.targetActif === (dataBipBip.maxCompetences-1))){
                        open('./index2.html', 'CV', 'directories=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,toolbar=yes');
                    }
                    break;

                case 'idHelpBtn':
                    helpScreen.style.display = 'block';
                    break;
            
                default:
                break;
            }
        }
            // --------------------------------------------------------------

        
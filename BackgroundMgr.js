        // ************************************************************************
        // ***                                                                  ***
        // *** Objet : ObjectFondEcran                                          ***
        // ***                                                                  ***
        // *** Cet objet sert à gérer le scrolling d'un arriere-plan            ***
        // ***                                                                  ***
        // ***  Nécessite :                                                     ***
        // ***      Une variable pour son instanciation                         ***
        // ***      Le module "keyFrameMgr.js"                                  ***
        // ***      Le module "tooBox.js"                                       ***
        // ***                                                                  ***
        // ************************************************************************
        function ObjectFondEcran(pSpeed, pKeyFrames, pIdFondEcran){
            this.bkgndWidth = 1920;           // Largeur de l'image de fond d'écran
            this.bkgndHeight = 1074;          // Hauteur de l'image de fond d'écran
            this.sensBkgnd = -1;              // Sens de defilement du fond d'écran (-1 vers la gauche, +1 vers la droite)
            this.speedBkgnd = ' '+pSpeed;     // Vitesse du défilement du fond d'écran
            this.myPosX = 0;                  // Position instantanée de l'origine (0,0) de l'image du fond d'écran 
            this.idFondEcran = pIdFondEcran;                 // Element HTML <div> identifié
            this.nomKeyFrames = pKeyFrames;   // Nom désignant le bloc de KeyFrames associé au scrolling du fond d'écran
        }

        // --------------------------------------------------------------
        // Méthodes prototypées de l'objet "FondEcran"
        // --------------------------------------------------------------
        ObjectFondEcran.prototype.initVar = function() {
            this.idFondEcran = document.getElementById(this.idFondEcran);
            this.idFondEcran.style.width = '100%';
            this.idFondEcran.style.height = fondEcranSol.bkgndHeight+'px';
        }
        // ---------------------------------------------------------------------------------------------------------
        // Cette fonction change dynamiquement le sens des fonds d'écran en relevant leur position actuelle, et en 
        // reprogrammant leur animation avec les coordonnées relevées
        // (sans rupture ni saut visible à l'écran, tout en fluidité)
        // Ne S'applique qu'à des animations de type "Scrolling"
        // ---------------------------------------------------------------------------------------------------------
        ObjectFondEcran.prototype.changeDirectionBkgnd = function() {
            this.myPosX = parseInt(window.getComputedStyle(this.idFondEcran,null).getPropertyValue("background-position-x"));
            this.myPosX %= this.bkgndWidth;                           // Pour garder la position X de l'écran dans l'intervale "0-1920" pixels
            this.sensBkgnd *= -1;
            objectKeyFrame.keyFrameFrom = this.myPosX+'px';
            objectKeyFrame.keyFrameTo = this.myPosX+(this.bkgndWidth * this.sensBkgnd)+'px';

            if (this.sensBkgnd < 0){
                objectKeyFrame.newAnimName = this.nomKeyFrames;
                objectKeyFrame.oldAnimName = this.nomKeyFrames+'1';
            } else {
                objectKeyFrame.newAnimName = this.nomKeyFrames+'1';
                objectKeyFrame.oldAnimName = this.nomKeyFrames;
            }
            objectKeyFrame.newRules = '@keyframes ' + objectKeyFrame.newAnimName + 
                                    ' {from {background-position-x: ' + objectKeyFrame.keyFrameFrom+';} '+
                                        'to {background-position-x: ' + objectKeyFrame.keyFrameTo+';}}';

            objectKeyFrame.changeKeyFrameRule(); 
            this.idFondEcran.style.animationName = objectKeyFrame.newAnimName;
        }
        // --------------------------------------------------------------

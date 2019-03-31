        // *************************************************************************
        // ***      Bip-Bip : Objet representant une des cibles symbolisant      ***
        // ***      une compétence                                               ***
        // ***                                                                   ***
        // *** Objet : BipBip                                                    ***
        // ***                                                                   ***
        // *** Cet objet sert à gérer :                                          ***
        // ***   - L'activation de la target active (le zoom/unzoom)             ***
        // ***   - L'animation dub déplacement de la compétence dans sa case     ***
        // ***                                                                   ***
        // ***  Nécessite :                                                      ***
        // ***      Une variable pour son instanciation                          ***
        // ***      Le module ancêtre "spriteAncestor.js"                        ***
        // ***      Le module "tooBox.js"                                        ***
        // ***                                                                   ***
        // *************************************************************************
        function BipBip(pBoite, pMasque, pSprite) {             // Fonction constructeur de Sprite "Bip-Bip"
            Sprite.call(this,pBoite, pMasque, pSprite);         // Passage des paramètres de création à l'objet-Ancêtre "Sprite"

            this.frameData = [{                                 // Informations des targets (emplacement, taille...)
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 3.13, 
                hauteurSpriteH: 3.13,
                offsetTop: 0,
                offsetDroite: 0,
                offsetGauche: 0
            }];

            competence = [
                { 
                    image: 'images/HTML5.png',
                    top: 90.05,
                    left: 9.38,
                    height: 6.17,
                    width: 2.55
                },{ 
                    image: 'images/CSS3.png',
                    top: 90.05,
                    left: 12.5,
                    height: 6.17,
                    width: 2.55
                },{ 
                    image: 'images/JavaScript.png', 
                    top: 90.05,
                    left: 15.63,
                    height: 6.17,
                    width: 4.95
                },{ 
                    image: 'images/AngularJS.png', 
                    top: 89.55,
                    left: 21.09,
                    height: 7.36,
                    width: 2.92
                },{ 
                    image: 'images/jQuery.png',
                    top: 91.34,
                    left: 24.48,
                    height: 3.48,
                    width: 6.04
                },{ 
                    image: 'images/Bootstrap.png',
                    top: 91.64,
                    left: 30.99,
                    height: 3.48,
                    width: 6.04
                },{ 
                    image: 'images/mongoDB.png',
                    top: 90.35,
                    left: 37.5,
                    height: 5.47,
                    width: 6.30
                },{ 
                    image: 'images/nodeJS.png',
                    top: 90.05,
                    left: 44.32,
                    height: 6.17,
                    width: 4.64
                },{ 
                    image: 'images/AJAX.png',
                    top: 90.75,
                    left: 49.53,
                    height: 4.68,
                    width: 4.48
                },{ 
                    image: 'images/ExpressJS.png',
                    top: 91.54,
                    left: 54.48,
                    height: 3.08,
                    width: 5.52
                },{ 
                    image: 'images/Meteor.png',
                    top: 90.05,
                    left: 60.52,
                    height: 6.17,
                    width: 3.13
            }];
        }
        //
        // ------------------------------------------------------------------------
        //
        // Mise en place du mécanisme de l'héritage de "Sprite" par "bipBip"
        //
        // -------------------------------------------------------------------------
        // On hérite de toutes les propiétés et méthode de "Sprite"
        BipBip.prototype = new Sprite();             

        // Et on refait pointer le Constructeur du vautour sur lui-même car il a été altéré par l'operation précédente
        BipBip.prototype.constructor = BipBip;
        //
        // -------------------------------------------------------------------------
        BipBip.prototype.initVarMod = function(){
            this.initVar();
            
            this.frameData[0].offsetBoiteMasqueH = this.computeOffsetBoiteMasqueH();
            this.frameData[0].offsetBoiteMasqueV = this.computeOffsetBoiteMasqueV();
            this.frameData[0].thicknessBoiteMasqueH = this.computeThicknessBoiteMasqueH();
            this.frameData[0].thicknessBoiteMasqueV = this.computeThicknessBoiteMasqueV();

            this.boite.style.width = this.frameData[0].largeurSpriteH + '%'; 
            this.boite.style.height = (this.frameData[0].hauteurSpriteH * (toolBox.screenWidth / toolBox.screenHeight)) + '%'; 
            this.masque.style.width = '100%'; 
            this.masque.style.height = '100%'; 
            this.sprite.style.width = '100%'; 
            this.sprite.style.height = '100%'; 

            // calcul de positions aléatoires sous contraintes (pas aux bords de l'ecran et toujours au-dessus du Control-Panel)
            this.boite.style.left= toolBox.random(50,(toolBox.screenWidth - (this.frameData[0].hauteurSpriteH + 50)))+'px';
            this.boite.style.top = toolBox.random(50,(toolBox.screenHeight - (parseInt(getComputedStyle(boiteControlPanel).height) + 200)))+'px';
        };
        // --------------------------------------------------------------
        //  Animation qui met en évidence la prochaine target à toucher
        // --------------------------------------------------------------
        BipBip.prototype.AfficheTargetActif = function(){
            this.boite.style.animation = '0.3s linear infinite animeImage alternate';
        };
        // --------------------------------------------------------------
        //  Lorsque Vil-Coyote touche la target clignotante, la compétence qui lui est liée est affichée dans le Control-Panel
        // --------------------------------------------------------------
        BipBip.prototype.traiteCompetence = function(){ 
            this.sprite.src=competence[dataBipBip.targetActif].image;
            this.boite.style.animation = 'none';

            this.boite.style.left = competence[dataBipBip.targetActif].left+'%';
            this.boite.style.top = competence[dataBipBip.targetActif].top+'%';
            this.boite.style.width = competence[dataBipBip.targetActif].width+'%';
            this.boite.style.height = competence[dataBipBip.targetActif].height+'%';
            this.masque.style.width = '100%';
            this.masque.style.height = '100%';
            this.sprite.style.width = '100%';
            this.sprite.style.height = '100%';
        }
        

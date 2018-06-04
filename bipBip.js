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
        // ************************************************************************
        function BipBip(pBoite, pMasque, pSprite) {             // Fonction constructeur de Sprite "Bip-Bip"
            Sprite.call(this,pBoite, pMasque, pSprite);         // Passage des paramètres de création à l'objet-Ancêtre "Sprite"

            this.frameData = [{                                 // Informations des targets (emplacement, taille...)
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 60, 
                hauteurSpriteH: 60,
                offsetTop: 0,
                offsetDroite: 0,
                offsetGauche: 0
            }];

            competence = [
                { 
                    image: 'images/HTML5.png',
                    top: 910,
                    left: 180,
                    height: 62,
                    width: 49
                },{ 
                    image: 'images/CSS3.png',
                    top: 910,
                    left: 240,
                    height: 62,
                    width: 49
                },{ 
                    image: 'images/JavaScript.png', 
                    top: 910,
                    left: 300,
                    height: 62,
                    width: 95
                },{ 
                    image: 'images/AngularJS.png', 
                    top: 905,
                    left: 405,
                    height: 74,
                    width: 56
                },{ 
                    image: 'images/jQuery.png',
                    top: 923,
                    left: 470,
                    height: 35,
                    width: 116
                },{ 
                    image: 'images/Bootstrap.png',
                    top: 926,
                    left: 595,
                    height: 29,
                    width: 116
                },{ 
                    image: 'images/mongoDB.png',
                    top: 913,
                    left: 720,
                    height: 55,
                    width: 121
                },{ 
                    image: 'images/nodeJS.png',
                    top: 910,
                    left: 851,
                    height: 62,
                    width: 89
                },{ 
                    image: 'images/AJAX.png',
                    top: 917,
                    left: 951,
                    height: 47,
                    width: 86
                },{ 
                    image: 'images/ExpressJS.png',
                    top: 925,
                    left: 1046,
                    height: 31,
                    width: 106
                },{ 
                    image: 'images/Meteor.png',
                    top: 910,
                    left: 1162,
                    height: 62,
                    width: 60
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

            this.boite.style.width = this.frameData[0].largeurSpriteH + 'px'; 
            this.boite.style.height = this.frameData[0].hauteurSpriteH + 'px'; 
            this.masque.style.width = this.frameData[0].largeurSpriteH + 'px'; 
            this.masque.style.height = this.frameData[0].hauteurSpriteH + 'px'; 
            this.sprite.style.width = this.frameData[0].largeurSpriteH + 'px'; 
            this.sprite.style.height = this.frameData[0].hauteurSpriteH + 'px'; 

            // calcul de positions aléatoires sous contraintes (pas aux bords de l'ecran et toujours au-dessus du Control-Panel)
            this.boite.style.left= toolBox.random(50,(toolBox.screenWidth - (this.frameData[0].hauteurSpriteH + 50)))+'px';
            this.boite.style.top = toolBox.random(50,(toolBox.screenHeight - (parseInt(boiteControlPanel.style.height) + this.frameData[0].hauteurSpriteH + 50)))+'px';
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
        BipBip.prototype.traiteCompetence = function(){ dataBipBip.moveSkillEnded = false;
        this.sprite.src=competence[dataBipBip.targetActif].image;

        this.boite.style.animation = 'none';
        this.boite.style.left = competence[dataBipBip.targetActif].left+'px';
        this.boite.style.top = competence[dataBipBip.targetActif].top+'px';
        this.sprite.style.width = competence[dataBipBip.targetActif].width+'px';
        this.sprite.style.height = competence[dataBipBip.targetActif].height+'px';
        }


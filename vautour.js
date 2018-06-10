        // *************************************************************************
        // ***      Vautour : Objet representant un des ennemis                  ***
        // ***                                                                   ***
        // *** Objet : Vautour                                                   ***
        // ***                                                                   ***
        // *** Cet objet sert à gérer :                                          ***
        // ***   - L'animation principale du vautour (le vol)                    ***
        // ***   - Les déplacements, les collisions et l'orientation du sprite   ***
        // ***                                                                   ***
        // ***                                                                   ***
        // ***  Nécessite :                                                      ***
        // ***      Une variable pour son instanciation                          ***
        // ***      Le module ancêtre "spriteAncestor.js"                        ***
        // ***      Le module "tooBox.js"                                        ***
        // ***                                                                   ***
         // ************************************************************************
        function Vautour(pBoite, pMasque, pSprite) {            // Fonction constructeur de du Sprite "Vil-Coyote"
            Sprite.call(this,pBoite, pMasque, pSprite);         // Passage des paramètres de création à l'objet-Ancêtre "Sprite"

            this.frameData =                                    // Tableau des tailles et positions des frames dans l'image des sprites
            [{                                      // -------------------  Vautour volant ---------------------
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 235, 
                hauteurSpriteH: 158,
                offsetTop: -672,
                offsetDroite: -784,
                offsetGauche: 0
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 233, 
                hauteurSpriteH: 159,
                offsetTop: -671,
                offsetDroite: -524,
                offsetGauche: -262
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 229, 
                hauteurSpriteH: 125,
                offsetTop: -671,
                offsetDroite: -265,
                offsetGauche: -525
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 225, 
                hauteurSpriteH: 91,
                offsetTop: -671,
                offsetDroite: -6,
                offsetGauche: -788
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 220, 
                hauteurSpriteH: 91,
                offsetTop: -926,
                offsetDroite: -788,
                offsetGauche: -11
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 215, 
                hauteurSpriteH: 92,
                offsetTop: -925,
                offsetDroite: -530,
                offsetGauche: -274
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 211, 
                hauteurSpriteH: 104,
                offsetTop: -913,
                offsetDroite: -271,
                offsetGauche: -537
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 207, 
                hauteurSpriteH: 140,
                offsetTop: -878,
                offsetDroite: -12,
                offsetGauche: -800
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 202, 
                hauteurSpriteH: 173,
                offsetTop: -1100,
                offsetDroite: -794,
                offsetGauche: -23  //
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 207, 
                hauteurSpriteH: 148,
                offsetTop: -1125,
                offsetDroite: -532,
                offsetGauche: -280
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 211, 
                hauteurSpriteH: 118,
                offsetTop: -1155,
                offsetDroite: -271,
                offsetGauche: -537
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 215, 
                hauteurSpriteH: 92,
                offsetTop: -1181,
                offsetDroite: -10,
                offsetGauche: -794
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 220, 
                hauteurSpriteH: 91,
                offsetTop: -1437,
                offsetDroite: -788,
                offsetGauche: -11
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 223, 
                hauteurSpriteH: 91,
                offsetTop: -1437,
                offsetDroite: -527,
                offsetGauche: -269
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 227, 
                hauteurSpriteH: 96,
                offsetTop: -1437,
                offsetDroite: -266,
                offsetGauche: -526
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 231, 
                hauteurSpriteH: 124,
                offsetTop: -1438,
                offsetDroite: -5,
                offsetGauche: -783
            },{                                                 // -------------------  Vautour explose ---------------------
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 84, 
                hauteurSpriteH: 83,
                offsetTop: -36,
                offsetDroite: -555,
                offsetGauche: -380
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 152, 
                hauteurSpriteH: 150,
                offsetTop: 0,
                offsetDroite: -263,
                offsetGauche: -604
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 65, 
                hauteurSpriteH: 82,
                offsetTop: -35,
                offsetDroite: -39,
                offsetGauche: -915
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 74, 
                hauteurSpriteH: 103,
                offsetTop: -281,
                offsetDroite: -818,
                offsetGauche: -127
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 83, 
                hauteurSpriteH: 117,
                offsetTop: -273,
                offsetDroite: -556,
                offsetGauche: -380
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 96, 
                hauteurSpriteH: 126,
                offsetTop: -267,
                offsetDroite: -290,
                offsetGauche: -633
            },{ 
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 111, 
                hauteurSpriteH: 129,
                offsetTop: -264,
                offsetDroite: -21,
                offsetGauche: -887
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 126, 
                hauteurSpriteH: 137,
                offsetTop: -516,
                offsetDroite: -792,
                offsetGauche: -101
            },{ 
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 138, 
                hauteurSpriteH: 147,
                offsetTop: -514,
                offsetDroite: -526,
                offsetGauche: -355
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 149, 
                hauteurSpriteH: 158,
                offsetTop: -514,
                offsetDroite: -259,
                offsetGauche: -610
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 150, 
                hauteurSpriteH: 158,
                offsetTop: -514,
                offsetDroite: 0,
                offsetGauche: -871
            }];
        };
        // ------------------------------------------------------------------------
        //
        // Mise en place du mécanisme de l'héritage de "Sprite" par "Vautour"
        //
        // -------------------------------------------------------------------------
        // On hérite de toutes les propiétés et méthode de "Sprite"
        Vautour.prototype = new Sprite();             
        // Et on refait pointer le Constructeur du vautour sur lui-même car il a été altéré par l'operation précédente
        Vautour.prototype.constructor = Vautour;
        //
        // ------------------------------------------------------------------------
        Vautour.prototype.initVarMod  = function(){
            this.initVar();

            this.pas = 7;                    // Incrément de déplacement vertical / horizontal en pixels 
            this.animDelai = 600;            // Délai pour laisser le temps à l'animation d'explosion de se terminer

            this.frameDeDebutNormal = 0;     // No du 1er frame du sprite (pas forcément le 1er de la série, prévu pour utilisation future)
            this.frameDeFinNormal = 15;      // No du dernier frame du sprite (pas forcément le dernier de la série, prévu pour utilisation future)
            this.animSpeedNormal = 25;       // Délai en mSec entre 2 frames ==> Vitesse d'animation     
            this.animPollingNormal = 5;      // Fréquence de mise à jour en mSec du deplacement ou de l'action  
            
            this.frameDeDebutCollision = 16; // No du 1er frame du sprite (pas forcément le 1er de la série, prévu pour utilisation future)
            this.frameDeFinCollision = 26;   // No du dernier frame du sprite (pas forcément le dernier de la série, prévu pour utilisation future)
            this.animSpeedCollision = 50;    // Délai en mSec entre 2 frames ==> Vitesse d'animation     
            this.animPollingCollision = 10;  // Fréquence de mise à jour en mSec du deplacement ou de l'action  
            
            this.frameDeDebut = this.frameDeDebutNormal;        // No du 1er frame du sprite (pas forcément le 1er de la série, prévu pour utilisation future)
            this.frameDeFin = this.frameDeFinNormal;            // No du dernier frame du sprite (pas forcément le dernier de la série, prévu pour utilisation future)
            this.frameActif = this.frameDeDebut;
            this.animSpeed = this.animSpeedNormal;              // Délai en mSec entre 2 frames ==> Vitesse d'animation     
            this.animPolling = this.animPollingNormal ;         // Fréquence de mise à jour en mSec du deplacement ou de l'action
            this.typeCycleAnimationFrames = 1;  //  1 --> 0-1-2-3_0-1-2-3_0-1-2-3... Les frames font leur cycle complet ascendant, et se reinitialisent sur la 1ere frame et recommencent
            
            // Pour des raisons de performances, je précalcule une fois toutes, toutes les dimensions de mes boites et masques, frame par frame
            for (var i = this.frameDeDebut; i <= this.frameDeFinCollision; i++) {
                this.frameData[i].offsetBoiteMasqueH = this.computeOffsetBoiteMasqueH();
                this.frameData[i].offsetBoiteMasqueV = this.computeOffsetBoiteMasqueV();
                this.frameData[i].thicknessBoiteMasqueH = this.computeThicknessBoiteMasqueH();
                this.frameData[i].thicknessBoiteMasqueV = this.computeThicknessBoiteMasqueV();
            }
            this.deplacement ();
        };
        // ------------------------------------------------------------------------
        //  Méthodes de l'objet "Vautour"
        //  Déclaration de toutes les méthodes nouvelles ou surchargeant les méthodes de l'Ancêtre "Sprite"
        // ------------------------------------------------------------------------
        Vautour.prototype.initFrameToRight  = function(){
            if (this.sensH <= 0){   
                this.initFrame('images/vulture_face_one_flying-droit.png',
                                'left', 
                                this.getRightOffset, 
                                'top');
            }
        };
        // --------------------------------------------------------------
        Vautour.prototype.initFrameToLeft  = function(){
            if (this.sensH >= 0){  
                this.initFrame( 'images/vulture_face_one_flying-gauche.png',
                                'left', 
                                this.getLeftOffset, 
                                'top');          
            }
        };
        // --------------------------------------------------------------
        Vautour.prototype.animationCaller = function(){
            this.idAnimationFrame = window.requestAnimationFrame(this.animeFrame.bind(this));
        };
        // --------------------------------------------------------------
        Vautour.prototype.initDeplacement = function(){
            if (toolBox.random(0,1) === 0){
                this.sensH =this.pas;
                this.initFrameToLeft(),
                this.boite.style.left = toolBox.screenWidth + 1 + 'px';
            } else {               
                this.sensH =-this.pas;
                this.initFrameToRight(),
                this.boite.style.left = -this.frameData[this.frameActif].thicknessBoiteMasqueH + 'px';
            }
            
            this.sensH *= -1;
            this.animationEnCours = true;
            this.animationCaller();
            this.boite.style.top = toolBox.random(0,toolBox.screenHeight - (parseInt(this.boite.style.height) + parseInt(getComputedStyle(boiteControlPanel).height)))+'px';

            this.boite.style.display = 'block';
        }
        // --------------------------------------------------------------
        Vautour.prototype.restaureModeNormal  = function(pEnnemi){
            clearTimeout(this.idTimeOut);        
            pEnnemi.comeBackInGame(this);      
        }
        // --------------------------------------------------------------
        Vautour.prototype.traiteCollision = function(pEnnemi){
            if (!pEnnemi.animationFXOn){            // Si Vil-Coyote n'est pas en mode "Rotation folle", alors il est touché et perd, sinon, il eclate le vautour
                pEnnemi.EjectModule(this);
                this.idTimeOut = setTimeout(this.restaureModeNormal.bind(this),pEnnemi.animDelai,pEnnemi);
            } else {
// XXXXXXXXXX 
// vilCoyote.traiteCollision(this);
            }
        }
        // --------------------------------------------------------------
        Vautour.prototype.isVautourHit = function(){
            if (!this.collision){
                if (this.detectCollision(vilCoyote)){                       
                    this.traiteCollision(vilCoyote);
                    this.collision = false;         
                }
            }
        }
        // --------------------------------------------------------------
        Vautour.prototype.gereDeplacement = function(){
            this.sensH > 0  ? this.moveSpriteToRight(this.screenCollideOff)
                            : this.moveSpriteToLeft(this.screenCollideOff);

            this.isVautourHit();

            this.myPosX = parseInt(this.boite.style.left);
            if ((this.myPosX <= -250) ||
                (this.myPosX >= (toolBox.screenWidth+250))){
                this.stoppeDeplacement();
// XXXXXXXXXX Pour reboucler en phase de DEV, A virer ensuite si je rajoute d'autres ennemis
                this.deplacement();  
            }
        }
        // --------------------------------------------------------------
        Vautour.prototype.stoppeDeplacement = function(){
            this.animationEnCours = false;
            window.clearInterval(this.idAnimationInterval);
            window.cancelAnimationFrame(this.idAnimationFrame);
        }
        // --------------------------------------------------------------
        Vautour.prototype.deplacement = function(){
            if (!this.animationEnCours){
                this.initDeplacement();
                this.idAnimationInterval = window.setInterval(this.gereDeplacement.bind(this),this.animPolling);
            }
        }
        // --------------------------------------------------------------


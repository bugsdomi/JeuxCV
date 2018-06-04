        // ************************************************************************
        // ***      EnergyBall : Objet representant les tirs de Vil-Coyote      ***
        // ***                                                                  ***
        // *** Objet : EnergyBall                                               ***
        // ***                                                                  ***
        // *** Cet objet sert à gérer :                                         ***
        // ***   - L'animation principale de Vil-Coyote (le pompage)            ***
        // ***   - L'animation permanente de Vil-Coyote (Le flottement)         ***
        // ***   - L'animation secondaire de Vil-Coyote (Le Spin "fou")         ***
        // ***   - Les déplacements, les changements de sens, les collisions avec**
        // ***     les bords de l'écran, et l'orientation du sprite             ***
        // ***                                                                  ***
        // ***                                                                  ***
        // ***  Nécessite :                                                     ***
        // ***      Une variable pour son instanciation                         ***
        // ***      Le module ancêtre "spriteAncestor.js"                         ***
        // ***                                                                  ***
         // ************************************************************************
        function EnergyBall(pBoite, pMasque, pSprite) {  // Fonction constructeur de du Sprite "Vil-Coyote"
            Sprite.call(this,pBoite, pMasque, pSprite);   // Passage des paramètres de création à l'objet-Ancêtre "Sprite"

            this.frameData =                // Tableau des tailles et positions des frames dans l'image des sprites
            [{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45, 
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: 0,
                offsetGauche: 0
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45,
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -51,
                offsetGauche: -51
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45,
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite:- 102,
                offsetGauche: -102
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45,
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -153,
                offsetGauche: -153
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45, 
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -204,
                offsetGauche: -204
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45,
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -255,
                offsetGauche: -255
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45,
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -306,
                offsetGauche: -306
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45,
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -357,
                offsetGauche: -357
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45, 
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -408,
                offsetGauche: -408
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45,
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -459,
                offsetGauche: -459
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45,
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -510,
                offsetGauche: -510
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45,
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -561,
                offsetGauche: -561
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45, 
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -612,
                offsetGauche: -612
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45,
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -663,
                offsetGauche: -663
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45,
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -714,
                offsetGauche: -714
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH: 45,
                hauteurSpriteH: 45,
                offsetTop: 0,
                offsetDroite: -765,
                offsetGauche: -765
            }];
        };          

        // ------------------------------------------------------------------------
        //
        // Mise en place du mécanisme de l'héritage de "Sprite" par "EnergyBall"
        //
        // -------------------------------------------------------------------------
        // On hérite de toutes les propiétés et méthode de "Sprite"
        EnergyBall.prototype = new Sprite();             
        // Et on refait pointer le Constructeur de Vil-Coyote sur lui-même car il a été altéré par l'operation précédente
        EnergyBall.prototype.constructor = EnergyBall;
        //
        // ------------------------------------------------------------------------
        EnergyBall.prototype.initVarMod  = function(){
            this.initVar();
            this.pas = 10;                   // Incrément de déplacement vertical / horizontal en pixels 
            this.sensH = this.pas;           // Sens de la progression horizontale (<0 Gauche / >0 droite)

            this.animSpeed = 100;            // Délai en mSec entre 2 frames ==> Vitesse d'animation     
            this.animDelai = 1000;           // Délai pour laisser le temps à l'animation d'explosion de se terminer
            this.animPolling = 4;            // Fréquence de mise à jour en mSec du deplacement ou de l'action

            this.frameDeDebutNormal = 0;     // No du 1er frame du sprite (pas forcément le 1er de la série, prévu pour utilisation future)
            this.frameDeFinNormal = 15;      // No du dernier frame du sprite (pas forcément le dernier de la série, prévu pour utilisation future)
            
            this.frameDeDebutCollision = 0;  // No du 1er frame du sprite (pas forcément le 1er de la série, prévu pour utilisation future)
            this.frameDeFinCollision = 15;   // No du dernier frame du sprite (pas forcément le dernier de la série, prévu pour utilisation future)

            this.frameDeDebut = this.frameDeDebutNormal;        // No du 1er frame du sprite (pas forcément le 1er de la série, prévu pour utilisation future)
            this.frameDeFin = this.frameDeFinNormal;            // No du dernier frame du sprite (pas forcément le dernier de la série, prévu pour utilisation future)
            this.frameActif = this.frameDeDebut;
            this.typeCycleAnimationFrames = 0;    //  0 --> 0-1-2-3_2-1-0_1-2-3_2-1-0...  Les frames vont et viennent dans un cycle ascendant/descendant permanent 

            // Pour des raisons de performances, je précalcule une fois toutes, toutes les dimensions de mes boites et masques, frame par frame
            for (var i = this.frameDeDebut; i <= this.frameDeFin; i++) {
                this.frameData[i].offsetBoiteMasqueH = this.computeOffsetBoiteMasqueH();
                this.frameData[i].offsetBoiteMasqueV = this.computeOffsetBoiteMasqueV();
                this.frameData[i].thicknessBoiteMasqueH = this.computeThicknessBoiteMasqueH();
                this.frameData[i].thicknessBoiteMasqueV = this.computeThicknessBoiteMasqueV();
            }

            this.keyboardMgr = new ObjectKeyboardMgr();
        };
        // ------------------------------------------------------------------------
        //  Méthodes de l'objet "EnergyBall"
        //  Déclaration de toutes les méthodes nouvelles ou surchargeant les méthodes de l'Ancêtre "Sprite"
        // ------------------------------------------------------------------------
        EnergyBall.prototype.restaureModeNormal  = function(pEnnemi){
            pEnnemi.frameDeDebut = pEnnemi.frameDeDebutNormal;
            pEnnemi.frameDeFin = pEnnemi.frameDeFinNormal;
            pEnnemi.frameActif = pEnnemi.frameDeDebut;
            pEnnemi.animSpeed = pEnnemi.animSpeedNormal;                    // Délai en mSec entre 2 frames ==> Vitesse d'animation     
            pEnnemi.animPolling = pEnnemi.animPollingNormal;                // Fréquence de mise à jour en mSec du deplacement ou de l'action
            pEnnemi.animationCaller();
            clearTimeout(this.idTimeOut);        
            pEnnemi.deplacement();      
        }
        // --------------------------------------------------------------
        EnergyBall.prototype.animationCaller = function(){
            this.idAnimationFrame = window.requestAnimationFrame(this.animeFrame.bind(this));
        };
        // --------------------------------------------------------------
        EnergyBall.prototype.traiteCollisionEnnemi = function(pEnnemi){
            pEnnemi.stoppeDeplacement();
            pEnnemi.frameDeDebut = pEnnemi.frameDeDebutCollision;
            pEnnemi.frameDeFin = pEnnemi.frameDeFinCollision;
            pEnnemi.frameActif = pEnnemi.frameDeDebut;
            pEnnemi.animSpeed = pEnnemi.animSpeedCollision;               // Délai en mSec entre 2 frames ==> Vitesse d'animation     
            pEnnemi.animPolling = pEnnemi.animPollingCollision ;          // Fréquence de mise à jour en mSec du deplacement ou de l'action
            pEnnemi.animationCaller();
            this.idTimeOut = setTimeout(this.restaureModeNormal.bind(this),pEnnemi.animDelai,pEnnemi);
        }
        // --------------------------------------------------------------
            
        // ************************************************************************
        // ***      VilCoyote : Objet representant le personnage principal      ***
        // ***                                                                  ***
        // *** Objet : VilCoyote                                                ***
        // ***                                                                  ***
        // *** Cet objet sert à gérer :                                         ***
        // ***   - L'animation principale de Vil-Coyote (le pompage)            ***
        // ***   - L'animation permanente de Vil-Coyote (Le flottement)         ***
        // ***   - L'animation secondaire de Vil-Coyote (Le Spin "fou")         ***
        // ***   - Les déplacements, les changements de sens, les collisions avec**
        // ***     les bords de l'écran, et l'orientation du sprite             ***
        // ***                                                                  ***
        // ***  Nécessite :                                                     ***
        // ***      Une variable pour son instanciation                         ***
        // ***      Le module ancêtre "spriteAncestor.js"                       ***
        // ***      Le module gestionnaire de clavier "keybdMgr.js"             ***
        // ***      Le module "keyFrameMgr.js"                                  ***
        // ***      Le module "energyBall.js"                                   ***
        // ***      Le module "tooBox.js"                                       ***
        // ***      Le module "score.js"                                        ***
        // ***      Le module "endOfGame.js"                                    ***
        // ***                                                                  ***
        // ************************************************************************
        function VilCoyote(pBoite, pMasque, pSprite) {    // Fonction constructeur de du Sprite "Vil-Coyote"
            Sprite.call(this,pBoite, pMasque, pSprite);   // Passage des paramètres de création à l'objet-Ancêtre "Sprite"

            this.animationFXOn = false;     // Flag d'effet speciaux lancés (Rotation folle de Vil-Coyote)
            this.idSpinInterval;            // Identifiant du SetInterval utilisé pour l'animation spéciale de Vil-Coyote
            this.sensAnimation = -1;        // Sens du déplacement vertical du module de Vil-Coyote
            this.maxFlottement = 100;       // Amplitude maximum en pixels du flottement du module volant de Vil-Coyote
            this.keyboardMgr;               // Instance du gestionnaire de clavier lié au Sprite commandé (Vil-Coyote)
            this.energyBall=[];             // Instances des Boules d'energie "EnergyBall" 
            this.nbShootedBalls;            // Nombre de boules d'energie tirées depuis la derniere séquence de tir 
            this.maxBalls = 5;              // Nombre maximum de boules d'energie tirées en rafale
            this.ballsInterval = 100;       // Intervale de tir entre 2 boules d'énergie 
            this.tirEnCours = false;        // Flag de sequence de tir en cours
            this.bloqueClavier = false;     // Sert a bloquer le clavier lorsque VilCoyote a ete touché et se fait ejecter du jeu
            this.nbreVies = 3;              // Nombres de vies de Vil-Coyote
            this.vie = [];                  // Instances des vies de 'Vil-Coyote'
            this.score;                     // Instance de l'objet "Score"
            this.endOfGame;                 // Instance de l'objet affichant "Victoire" ou "perdu"
    
            this.frameData =                // Tableau des tailles et positions des frames dans l'image des sprites
            [{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0,
                offsetBoiteMasqueV: 0, 
                thicknessBoiteMasqueV: 0,
                largeurSpriteH: 191, 
                hauteurSpriteH: 196,
                offsetTop: 0,
                offsetDroite: 0,
                offsetGauche:-653
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH:191,
                hauteurSpriteH:196,
                offsetTop: 0,
                offsetDroite:-216,
                offsetGauche:-434
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH:191,
                hauteurSpriteH:196,
                offsetTop: 0,
                offsetDroite:-426,
                offsetGauche:-223
            },{
                offsetBoiteMasqueH: 0, 
                thicknessBoiteMasqueH: 0, 
                offsetBoiteMasqueV: 0,                  
                thicknessBoiteMasqueV: 0, 
                largeurSpriteH:191,
                hauteurSpriteH:196,
                offsetTop: 0,
                offsetDroite:-639,
                offsetGauche:-13
            }];
        };          

        // ------------------------------------------------------------------------
        //
        // Mise en place du mécanisme de l'héritage de "Sprite" par "VilCoyote"
        //
        // -------------------------------------------------------------------------
        // On hérite de toutes les propiétés et méthode de "Sprite"
        VilCoyote.prototype = new Sprite();             
        // Et on refait pointer le Constructeur de Vil-Coyote sur lui-même car il a été altéré par l'operation précédente
        VilCoyote.prototype.constructor = VilCoyote;
        //
        // ------------------------------------------------------------------------

        // ------------------------------------------------------------------------
        //  Méthodes de l'objet "VilCoyote"
        //  Déclaration de toutes les méthodes nouvelles ou surchargeant les méthodes de l'Ancêtre "Sprite"
        // ------------------------------------------------------------------------
        VilCoyote.prototype.initVarMod  = function(){
            this.initVar();
            this.pas = 5;                   // Incrément de déplacement vertical / horizontal en pixels 
            this.animSpeed = 100;           // Délai en mSec entre 2 frames ==> Vitesse d'animation     
            this.animDelai = 1500;          // Délai pour laisser le temps à l'animation d'ejection de se terminer
            this.nbreVies = 3;

            this.frameDeDebutNormal = 0;    // No du 1er frame du sprite (pas forcément le 1er de la série, prévu pour utilisation future)
            this.frameDeFinNormal = 2;      // No du dernier frame du sprite (pas forcément le dernier de la série, prévu pour utilisation future)
            
            this.frameDeDebutCollision = 0; // No du 1er frame du sprite (pas forcément le 1er de la série, prévu pour utilisation future)
            this.frameDeFinCollision = 2;   // No du dernier frame du sprite (pas forcément le dernier de la série, prévu pour utilisation future)

            this.frameDeDebut = this.frameDeDebutNormal;   // No du 1er frame du sprite (pas forcément le 1er de la série, prévu pour utilisation future)
            this.frameDeFin = this.frameDeFinNormal;       // No du dernier frame du sprite (pas forcément le dernier de la série, prévu pour utilisation future)
            this.frameActif = this.frameDeDebut;
            this.typeCycleAnimationFrames = 0;             //  0 --> 0-1-2-3_2-1-0_1-2-3_2-1-0...  Les frames vont et viennent dans un cycle ascendant/descendant permanent 

            for (var i=0; i < this.nbreVies; i++){
                this.vie[i] = document.getElementById('idSpriteVie'+[i]);   
                this.vie[i].style.top = '1%';
                this.vie[i].style.left = 0.5 + (5 * i)+'%';
            }

            // Pour des raisons de performances, je précalcule une fois toutes, toutes les dimensions de mes boites et masques, frame par frame
            for (var i = this.frameDeDebut; i <= this.frameDeFin; i++) {
                this.frameData[i].offsetBoiteMasqueH = this.computeOffsetBoiteMasqueH();
                this.frameData[i].offsetBoiteMasqueV = this.computeOffsetBoiteMasqueV();
                this.frameData[i].thicknessBoiteMasqueH = this.computeThicknessBoiteMasqueH();
                this.frameData[i].thicknessBoiteMasqueV = this.computeThicknessBoiteMasqueV();
            }
            
            // ------------------------------------------------------------
            // Initialisation du gestionnaire de clavier
            // ------------------------------------------------------------            
            this.keyboardMgr = new ObjectKeyboardMgr();

            // ------------------------------------------------------------
            // Initialisation du gestionnaire de "score"
            // ------------------------------------------------------------
            this.score = new Score();
            this.score.initVar();

            // ------------------------------------------------------------
            // Initialisation du gestionnaire de tirs
            // ------------------------------------------------------------
//  XXXXXXXXXX Declarer toutes les boules pour les tirs en rafale
// for (var i=0; i<; i++){
//     this.energyBall[i] = new EnergyBall('idBoiteEnergyBall'+i,'idMasqueEnergyBall'+i,'idSpriteEnergyBall'+i);
//     this.energyBall[i].initVarMod();
// }
            this.energyBall[0] = new EnergyBall('idBoiteEnergyBall0','idMasqueEnergyBall0','idSpriteEnergyBall0');
            this.energyBall[0].initVarMod();

            vilCoyote.animationCaller();
        };
        // ------------------------------------------------------------------------
        VilCoyote.prototype.initFrameMod  = function(image, styleProp1, fonction, styleProp2){
            this.initFrame(image, styleProp1, fonction, styleProp2);
            fondEcranSol.changeDirectionBkgnd();
            fondEcranNuages.changeDirectionBkgnd();
        } 
        // --------------------------------------------------------------
        VilCoyote.prototype.initFrameToRight  = function(){
            if (this.sensH <= 0){   
                this.initFrameMod('images/vil-coyote-sur-module-start-01-04-Droite.png',
                                    'left', 
                                    this.getRightOffset, 
                                    'top');
            }
        };
        // --------------------------------------------------------------
        VilCoyote.prototype.initFrameToLeft  = function(){
            if (this.sensH >= 0){   
                this.initFrameMod( 'images/vil-coyote-sur-module-start-01-04-Gauche.png',
                                    'left', 
                                    this.getLeftOffset, 
                                    'top');          
            }
        };
        // --------------------------------------------------------------
        VilCoyote.prototype.restaureModeNormal  = function(pEnnemi){
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
        VilCoyote.prototype.traiteCollisionEnnemi = function(pEnnemi){
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
        VilCoyote.prototype.gereHitEnnemi = function(pEnnemi){
            if (!this.collision){
// XXXXXXXXXX Rajouter les autres ennenmis
                for (var i=0; i<pEnnemi.length; i++){
                    if (this.detectCollision(pEnnemi[i])){
                        if (this.animationFXOn){                // Si Vil-Coyote touche un ennemi ET qu'il est en mode "Spin fou", il eclate tous les ennemis touchés, sinon, c'est lui qui perd
                            this.traiteCollisionEnnemi(pEnnemi[i]);
                            this.collision = false;         
                        } else {
                            this.collision = false;         
                        }
                    }
                }
            }
        }    
        // --------------------------------------------------------------
        VilCoyote.prototype.traiteVictoire = function(){
            cvCourtBtn.style.filter = 'grayscale(0)';      // Passage en couleur du parchemin car il devient accessible
            this.stopGame();
            endOfGame = new EndOfGame();
            endOfGame.displayEndOfGameMsg(endOfGame.victoire);
            endOfGame = undefined;                      // Destruction de l'objet et libération mémoire lors du Garbage Collector
        }
        // --------------------------------------------------------------
        VilCoyote.prototype.traiteCollisionTarget = function(pTarget,pIndex){
            if (pIndex === dataBipBip.targetActif){
                pTarget.traiteCompetence();
                this.score.scoreActuel += 1;
                this.score.AfficheScore();

                if (dataBipBip.targetActif < (dataBipBip.maxCompetences - 1)){
                    dataBipBip.targetActif += 1;
                    dataBipBip.bipBip[dataBipBip.targetActif].AfficheTargetActif();
                } else {
                    this.traiteVictoire();
                }            
            }
        }
        // --------------------------------------------------------------
        VilCoyote.prototype.gereHitTarget = function(){
            if (!this.collision){
                for (var i=0; i<dataBipBip.maxCompetences; i++){
                    if (this.detectCollision(dataBipBip.bipBip[i])){
                        this.traiteCollisionTarget(dataBipBip.bipBip[i],i);
                        this.collision = false;         
                    }
                }
            }
        }    
        // --------------------------------------------------------------
        VilCoyote.prototype.changeDirectionHMod  = function(pSensActuel, pFonction1, pSensFutur, pFonction2, pScreenCollide){
            this.changeDirectionH(pSensActuel, pFonction1, pSensFutur, pFonction2, pScreenCollide);
            this.gereHitEnnemi(dataVautours.vautour);
            this.gereHitTarget();
        }
        // --------------------------------------------------------------
        VilCoyote.prototype.changeDirectionVMod  = function(pSensActuel, pFonction1){
            // Préservation de la coordonnée Y avant de désaffecter l'animation de flottement (et qui va donc faire un 'reset' de ses coordonnées KeyFrames)
            this.boite.style.animationPlayState = 'paused';
            this.myPosY = parseInt(window.getComputedStyle(this.boite,null).getPropertyValue('top')); 
            this.boite.style.animationName = 'none';

            this.changeDirectionV(pSensActuel, pFonction1);
            this.gereHitEnnemi(dataVautours.vautour);      
            this.gereHitTarget();
        }   
        // --------------------------------------------------------------
        VilCoyote.prototype.refreshAnimFlottementModule = function(){
            this.myPosY = parseInt(window.getComputedStyle(this.boite,null).getPropertyValue('top'));
            objectKeyFrame.upDateKeyFrames(this,'flottementModule',' {0% {','50% {','top',this.myPosY,this.myPosY+(this.maxFlottement));
        }
        // --------------------------------------------------------------
        VilCoyote.prototype.animationCaller = function(){
            this.idAnimationFrame = window.requestAnimationFrame(this.animeFrame.bind(this));
        };
        // --------------------------------------------------------------
        VilCoyote.prototype.spinVilCoyote = function(){
            if (!this.bloqueClavier){
                this.masque.style.animation = (this.sensH >= 0) ? 'spinVilCoyote 0.9s linear 0s infinite' 
                                                                : 'spinVilCoyote 0.9s linear 0s infinite reverse';
            } else {
                this.masque.style.animation = (this.sensH >= 0) ? 'spinVilCoyote 0.9s linear 0s infinite reverse' 
                                                                : 'spinVilCoyote 0.9s linear 0s infinite';                
            }
        };
        // --------------------------------------------------------------
        VilCoyote.prototype.setSpinVilCoyote = function(){
            if (!this.animationFXOn){
                this.boite.style.animationPlayState = 'paused';       // Pour raison de réalisme, mise en pause de l'animation de flottement pendant le "Spin"
                this.idSpinInterval = window.setInterval(this.spinVilCoyote.bind(this),1);
                this.animationFXOn = true;
            }
        };
        // --------------------------------------------------------------
        VilCoyote.prototype.unsetSpinVilCoyote = function(){
            if (this.animationFXOn){
                this.boite.style.animationPlayState = 'running';      // réactivation de l'animation de flottement après le "Spin"
                this.masque.style.animation = 'none';
                window.clearInterval(this.idSpinInterval);
                this.animationFXOn = false;
            } 
        };
        // --------------------------------------------------------------
        VilCoyote.prototype.initTir = function(){
            this.tirEncours = true;
            this.energyBall[0].animationCaller();
            this.energyBall[0].boite.style.left = (this.sensH > 0   ? parseInt(this.boite.style.left) + this.frameData[this.frameActif].thicknessBoiteMasqueH + 1
                                                                    : parseInt(this.boite.style.left) + this.frameData[this.frameActif].offsetBoiteMasqueH 
                                                                    - parseInt(this.energyBall[0].boite.style.width) - 1) + 'px';
            this.energyBall[0].boite.style.top = parseInt(window.getComputedStyle(this.boite,null).getPropertyValue('top')) + 110 +'px';
            this.energyBall[0].sensH = Math.abs(this.energyBall[0].sensH) * toolBox.sign(this.sensH);
            this.energyBall[0].boite.style.display = 'block';
        }
        // --------------------------------------------------------------
        VilCoyote.prototype.StoppeTir = function(){
            this.tirEncours = false;
            window.clearInterval(this.idAnimationInterval);
            window.cancelAnimationFrame(this.energyBall[0].idAnimationFrame);
            this.energyBall[0].boite.style.display = 'none';
        }
        // --------------------------------------------------------------
        VilCoyote.prototype.isEnergyBallHit = function(){
            if (!this.energyBall[0].collision){
// XXXXXXXXXX Rajouter les autres ennenmis
                for (var i=0; i<dataVautours.vautour.length; i++){
                    if (this.energyBall[0].detectCollision(dataVautours.vautour[i])){                        
                        this.StoppeTir();
                        this.energyBall[0].traiteCollisionEnnemi(dataVautours.vautour[i]);
                        this.energyBall[0].collision = false;         
                    }
                }
            }                
        }
        // --------------------------------------------------------------
        VilCoyote.prototype.gereTir = function(){
            this.energyBall[0].sensH > 0    ? this.energyBall[0].moveSpriteToRight(this.screenCollideOff)
                                            : this.energyBall[0].moveSpriteToLeft(this.screenCollideOff);

            this.isEnergyBallHit();

            this.energyBall[0].myPosX = parseInt(this.energyBall[0].boite.style.left);

            if ((this.energyBall[0].myPosX <= -50) ||
                (this.energyBall[0].myPosX >= (toolBox.screenWidth))){
                this.StoppeTir();
            }
        }
        // --------------------------------------------------------------
        VilCoyote.prototype.shoot = function(){           
            if (!this.tirEncours){
                this.initTir();
                this.idAnimationInterval = window.setInterval(this.gereTir.bind(this),this.energyBall[0].animPolling);
            }
        }
        // --------------------------------------------------------------
        VilCoyote.prototype.stoppeDeplacement = function(){
            this.unsetSpinVilCoyote();
            this.bloqueClavier = true;                         // Blocage du clavier --> On ne peut plus commander Vil-Coyote apres la fin du jeu
            this.boite.style.animation = 'STOPPED';            // Arret du flottement du module
            // window.clearInterval(this.idAnimationInterval);
            window.cancelAnimationFrame(this.idAnimationFrame);// Arret de l'animation principale de Vil-Coyote
        }
        // --------------------------------------------------------------
        VilCoyote.prototype.stopGame = function(){           
            dataVautours.vautour[0].stoppeDeplacement();
            this.stoppeDeplacement();
            fondEcranSol.idFondEcran.style.animation = 'none';
            fondEcranNuages.idFondEcran.style.animation = 'none';
        }
        // --------------------------------------------------------------
        VilCoyote.prototype.traiteDefaite = function(){
            this.stopGame();
            endOfGame = new EndOfGame();
            endOfGame.displayEndOfGameMsg(endOfGame.defaite);
            endOfGame = undefined;                      // Destruction de l'objet et libération mémoire lors du Garbage Collector
        }
        // --------------------------------------------------------------
        VilCoyote.prototype.EjectModule = function(pEnnemi){
            this.vie[this.nbreVies-1].style.display = 'none';   // Supprime 1 icone de vie
            this.nbreVies -= 1;                                 // Retire 1 vie du stock

            if (this.nbreVies >= 0){
                this.bloqueClavier = true;                      // Empeche la frappe de touches du clavier
                this.setSpinVilCoyote();                        // Lance le module de Vil-CVoyote en mode "Rotation folle"
                this.boite.style.animation = (pEnnemi.sensH >= 0)   ? 'ejectVilCoyoteD 1.5s linear 0s 1 forwards' 
                                                                    : 'ejectVilCoyoteG 1.5s linear 0s 1 forwards';
                if (this.nbreVies == 0){
                    this.traiteDefaite();
                }
            }
        }
        // --------------------------------------------------------------
        VilCoyote.prototype.comeBackInGame = function() {
            if (this.nbreVies > 0){
                this.unsetSpinVilCoyote();
                this.boite.style.animation = '4s linear infinite flottementModule alternate'; 
                setTimeout(this.refreshAnimFlottementModule.bind(this), 500);
                this.bloqueClavier = false;
            }
        }
        // --------------------------------------------------------------

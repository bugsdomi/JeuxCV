        // ************************************************************************
        // ***      Sprite : Objet representant l'ancêtre des Sprites           ***
        // ***                                                                  ***
        // *** Objet : Sprite                                                   ***
        // *** Inclus les Frames, le masque, et la boite englobante,            ***
        // *** eux-mêmes de type "Objet")                                       ***
        // ***                                                                  ***
        // *** Cet objet sert à gérer :                                         ***
        // ***   - Les déplacements, les changements de sens, les collisions avec**
        // ***     les bords de l'écran, et l'orientation du sprite             ***
        // ***                                                                  ***
        // ***                                                                  ***
        // ***  Chaque Sprite est composé :                                     ***
        // ***  - d'une image composée de Frames et accessible par le sous-objet*** 
        // ***    "sprite"                                                      ***
        // ***  - d'un sous-objet "masque" contenant le sous-objet "sprite"     ***
        // ***  - d'un sous-objet "boite contenant le sous-objet "masque" et    ***
        // ***    servant au centrage dynamique du "masque                      ***
        // ***                                                                  ***
        // ***  Nécessite :                                                     ***
        // ***      Rien                                                        ***
        // ***                                                                  ***
        // ************************************************************************

        function Sprite(pBoite, pMasque, pSprite) {               // Fonction constructeur de tous les Sprites

            // Propriétés avec des valeurs par défaut à surcharger dans les héritiers 

            // Type de cycle d'animation des frames (Important pour la qualité visuelle de l'animation et la vbitesse): 
            //  0 --> 0-1-2-3_2-1-0_1-2-3_2-1-0...  Les frames vont et viennent dans un cycle ascendant/descendant permanent
            //  1 --> 0-1-2-3_0-1-2-3_0-1-2-3...    Les frames font leur cycle complet ascendant, et se reinitialisent sur la 1ere frame et recommencent
            //  On doit positionner cette valeur à 1 lorsque le dessin des frames de fin est en correspondance avec celui des frames de débuts
            // Sinon, la mettre à 0, permettra un mouvement plus fluide des frames qui n'ont pas été dessinées pour reboucler automatiquement
            this.typeCycleAnimationFrames = 1;    
            this.pas = 5;                   // Incrément de déplacement vertical / horizontal en pixels 
            this.animDelai = 1000;          // Délai pour laisser le temps à l'animation d'explosion de se terminer
            this.frameDeDebut = 0;          // No du 1er frame du sprite (pas forcément le 1er de la série)         \_ Frames utilisées actuellement (Normales, ou explosion)
            this.frameDeFin = 0;            // No du dernier frame du sprite (pas forcément le dernier de la série) / 
            this.animSpeed = 100;           // Délai en mSec entre 2 frames ==> Vitesse d'animation     
            this.animPolling = 10;          // Fréquence de mise à jour en mSec du deplacement ou de l'action  

            this.frameDeDebutNormal = 0;    // No du 1er frame du sprite (pas forcément le 1er de la série)         \_ Frames Animation normale
            this.frameDeFinNormal = 0;      // No du dernier frame du sprite (pas forcément le dernier de la série) /
            this.animSpeedNormal = 100;     // Délai en mSec entre 2 frames ==> Vitesse d'animation     
            this.animPollingNormal = 10;    // Fréquence de mise à jour en mSec du deplacement ou de l'action  

            this.frameDeDebutCollision = 0; // No du 1er frame du sprite (pas forcément le 1er de la série)         \_ Frames Animation Explosion
            this.frameDeFinCollision = 0;   // No du dernier frame du sprite (pas forcément le dernier de la série) /
            this.animSpeedCollision = 100;  // Délai en mSec entre 2 frames ==> Vitesse d'animation     
            this.animPollingCollision = 10; // Fréquence de mise à jour en mSec du deplacement ou de l'action  

            // Propriétés de gestion technique qu'il n'est pas nécessaire de surcharger dans les héritiers, mais autorisé            
            this.frameActif = 0;            // No de l'image du sprite active
            this.newPos = 0;                // Nouvelle position future du sprite
            this.boiteStyleLeft;            // Pour rapidité en evitant le recalcul, affectation à une variable intermédiaire
            this.boiteStyleTop;             // Pour rapidité en evitant le recalcul, affectation à une variable intermédiaire
            this.thisboiteStyleLeft         // Pour rapidité en evitant le recalcul, affectation à une variable intermédiaire \_ "this.thisBoiteSyle..."" Fait exprès pour différencier des 2 variables précédentes
            this.thisboiteStyleTop          // Pour rapidité en evitant le recalcul, affectation à une variable intermédiaire /
            this.sensH = this.pas;          // Sens de la progression horizontale (<0 Gauche / >0 droite)
            this.sensV = 0;                 // Sens de la progression verticale (<0 Haut / >0 Bas)
            this.animationOn = true;        // Flag pour arrêter ou relancer l'animation automatique du sprite (Pour Dev uniquement)
            this.animationEnCours = false;  // Flag temoin de l'tat   de l'animation (lancée ou non)
            this.sensAnimFrames = 1;        // Gere les images dans la sequence 0-1-2-3...N puis N...3-2-1-0 puis 0-1-2-3..N etc ... (si "typeCycleAnimationFrames"=0)
            this.idAnimationInterval;       // Identifiant de l'animation du sprite pour la stopper quand ce n'est plus nécessaire (économie CPU)
            this.idAnimationFrame           // Identifiant du "RequestAnimationFrame
            this.idTimeOut;
            this.timestampInitial = undefined; // Valeur de temps de référence pour le changement de frame au refresh écran   
            this.myPosY = 0;                // Position verticale du sprite 
            this.myPosX = 0;                // Position horizontale du sprite 
            this.screenCollideOn = true;    // Paramètre servant dans des les déplacement à determiner si les bords d'écran bloquent le sprite
            this.screenCollideOff = false;  // Idem ci-dessus mais inversé
            this.collision = false;         // Collision par entité 

            // Propriétés A NE PAS surcharger dans les héritiers             
            this.idBoite = pBoite;          // variable de l'ID HTML de la boite contenant le masque et le sprite
            this.idMasque = pMasque;        // variable de l'ID HTML du masque contenant le sprite
            this.idSprite = pSprite         // variable de l'ID HTML du sprite (Image )
            this.boite;                     // Instance de la boite contenant le masque et le sprite
            this.masque;                    // variable du masque contenant le sprite
            this.sprite;                    // variable du sprite (Image )
        };
        // --------------------------------------------------------------
        // Méthodes prototypées de l'objet "Sprite"
        // --------------------------------------------------------------
        Sprite.prototype.initVar = function(){
            this.boite = document.getElementById(this.idBoite);
            this.boite.style.width = window.getComputedStyle(this.boite).width;
            this.boite.style.height = window.getComputedStyle(this.boite).height;
            
            this.masque = document.getElementById(this.idMasque);
            this.sprite = document.getElementById(this.idSprite);        
// XXXXXXXXXX ParseInt vraiment necessaire ?   A voir
            this.boite.style.left = parseInt(window.getComputedStyle(this.boite).left)+'px';
            this.boite.style.top = parseInt(window.getComputedStyle(this.boite).top)+'px';
            this.sensH = this.pas;
            this.sensV = 0;
        };
        // --------------------------------------------------------------
        // Donne le décalage "Left" du frame dans l'image de sequence quand le sprite va a gauche
        Sprite.prototype.getLeftOffset = function(){                          
            return this.frameData[this.frameActif].offsetGauche;            
        };
        // --------------------------------------------------------------
        // Donne le décalage "Left" du frame dans l'image de sequence quand le sprite va a droite
        Sprite.prototype.getRightOffset = function(){
            return this.frameData[this.frameActif].offsetDroite;            
        };
        // --------------------------------------------------------------
        // Donne le décalage "Top" du frame dans l'image 
        Sprite.prototype.getTopOffset = function(){
            return this.frameData[this.frameActif].offsetTop;            
        };
        // --------------------------------------------------------------
        Sprite.prototype.getHorizontalSpriteWidth = function(){
            return this.frameData[this.frameActif].largeurSpriteH;
        };
        // --------------------------------------------------------------
        Sprite.prototype.getHorizontalSpriteHeight = function(){
            return this.frameData[this.frameActif].hauteurSpriteH;            
        };            
        // --------------------------------------------------------------
        // Calcule la taille de l'espace entre le bord gauche de la boite englobante du sprite, et le bord du sprite centré dans la boite (sert pour la collision gauche)
                        
                        //   |<--->|
                        //   |_____|_______________
                        //   |xxxxx|        |     |
                        //   |xxxxx| sprite |     |
                        //   |xxxxx|<-    ->|     |
                        //   |xxxxx|        |     |
                        //   ----------------------   
                        //   |                    |
                        //   |<-Boite englobante->|

        Sprite.prototype.computeOffsetBoiteMasqueH = function(){
            return (Math.round((parseInt(this.boite.style.width) - parseInt(this.frameData[this.frameActif].largeurSpriteH)) / 2));
        };
        // --------------------------------------------------------------
        // Calcule la taille de l'espace entre le bord supérieur de la boite englobante du sprite, et le bord haut du sprite centré dans la boite (sert pour la collision haute)
        Sprite.prototype.computeOffsetBoiteMasqueV = function(){
            return (Math.round((parseInt(this.boite.style.height) - parseInt(this.frameData[this.frameActif].hauteurSpriteH)) / 2));
        };
        // --------------------------------------------------------------
        // Donne au masque les mêmes dimensions que le sprite
                        //    _____|_Sprite_|_____
                        //   |    ||        ||    |
                        //   |    || Sprite ||    |
                        //   |    ||    =   ||    |
                        //   |    |  Masque  |    |
                        //   ----------------------   
                        //   |                    |
                        //   |<-Boite englobante->|

        Sprite.prototype.computeTailleMasque = function(){
            this.masque.style.width = this.getHorizontalSpriteWidth()+'px';
            this.masque.style.height = this.getHorizontalSpriteHeight()+'px';
        };
        // --------------------------------------------------------------
        // Calcule la taille de l'espace compris entre le bord gauche de la boite, et le bord droit du sprite centré dans la boite (sert pour la collision droite)
                        
                        //   |<------------>|
                        //   |______________|_____
                        //   |xxxxx|xxxxxxxx|     |
                        //   |xxxxx| sprite |     |
                        //   |xxxxx|<-    ->|     |
                        //   |xxxxx|xxxxxxxx|     |
                        //   ----------------------   
                        //   |                    |
                        //   |<-Boite englobante->|

        Sprite.prototype.computeThicknessBoiteMasqueH = function(){
            return (this.computeOffsetBoiteMasqueH() + this.getHorizontalSpriteWidth());
        };
        // --------------------------------------------------------------
        // Calcule la taille de l'espace compris entre le bord Haut de la boite, et le bord bas du sprite centré dans la boite (sert pour la collision basse)
        Sprite.prototype.computeThicknessBoiteMasqueV = function(){
            return (this.computeOffsetBoiteMasqueV() + this.getHorizontalSpriteHeight());
        };
        // --------------------------------------------------------------
        Sprite.prototype.initFrame = function(pImage, pStyleProp1, pFonction1, pStyleProp2){
            this.sprite.src=pImage;
            this.sprite.style[pStyleProp1] = pFonction1.call(this) + 'px';
            this.sprite.style[pStyleProp2] = 0 + 'px';
            this.computeTailleMasque();
        };
        // --------------------------------------------------------------
        Sprite.prototype.detectCollision = function(pEnnemi){
// XXXXXXXXXX A verifier si c'est interessant de garder
            if (!this.collision){      // Si l'entité est déjà en collision, on ne reteste pas, pour optimisation CPU 
                // Pour eviter les calculs répétitifs de ParseInt, affectation à des variables intermédiaires
                this.boiteStyleLeft = parseInt(pEnnemi.boite.style.left);
                this.boiteStyleTop = parseInt(pEnnemi.boite.style.top);
                var thisboiteStyleLeft = parseInt(this.boite.style.left);
                var thisboiteStyletop = parseInt(this.boite.style.top);

                // Vérification que 2 masques se touchent ==> Collision
                if (((this.boiteStyleLeft + pEnnemi.frameData[pEnnemi.frameActif].offsetBoiteMasqueH) <= 
                    (thisboiteStyleLeft + this.frameData[this.frameActif].thicknessBoiteMasqueH)) && 

                    ((this.boiteStyleLeft + pEnnemi.frameData[pEnnemi.frameActif].thicknessBoiteMasqueH) >= 
                    (thisboiteStyleLeft+this.frameData[this.frameActif].offsetBoiteMasqueH)) &&

                    (((this.boiteStyleTop + pEnnemi.frameData[pEnnemi.frameActif].thicknessBoiteMasqueV) >= 
                    (thisboiteStyletop+this.frameData[this.frameActif].offsetBoiteMasqueV)) &&

                    ((this.boiteStyleTop + pEnnemi.frameData[pEnnemi.frameActif].offsetBoiteMasqueV) <= 
                    (thisboiteStyletop + this.frameData[this.frameActif].thicknessBoiteMasqueV)))){  
                    this.collision = true;   
                }
                return this.collision;
            }
        }
        // --------------------------------------------------------------
        Sprite.prototype.changeDirectionH = function(pSensActuel, pFonction1, pSensFutur, pFonction2, pScreenCollide){
            this[pSensActuel.sens] = pSensActuel.valeur;
            pFonction1.call(this);
            this[pSensFutur.sens] = pSensFutur.valeur;
            pFonction2.call(this,pScreenCollide);
        };
        // --------------------------------------------------------------
        Sprite.prototype.changeDirectionV = function(pSensActuel, pFonction1){
            this.sensV = pSensActuel * this.pas;
            pFonction1.call(this);
        }
        // --------------------------------------------------------------
        Sprite.prototype.moveSpriteToRight = function(pScreenCollide){
            // Pour des raisons de rapidité, affectation à une propriété intermédiaire pour eviter de faire le même calcul plusieurs fois
            this.boiteStyleLeft = parseInt(this.boite.style.left);   
            this.newPos = this.boiteStyleLeft + this.frameData[this.frameActif].thicknessBoiteMasqueH + this.sensH;
            this.boite.style.left = (pScreenCollide && 
                                    (this.newPos >= toolBox.screenWidth)    ? toolBox.screenWidth - (this.frameData[this.frameActif].thicknessBoiteMasqueH+1) 
                                                                            : this.boiteStyleLeft + this.sensH) + 'px';
        };  
        // --------------------------------------------------------------
        Sprite.prototype.moveSpriteToLeft = function(pScreenCollide){
            this.newPos = parseInt(this.boite.style.left) + this.sensH;
            this.boite.style.left =  (pScreenCollide && (this.newPos < 
                                    -(this.frameData[this.frameActif].offsetBoiteMasqueH))  ? -this.frameData[this.frameActif].offsetBoiteMasqueH 
                                                                                            : this.newPos) + 'px';
        };     
        // --------------------------------------------------------------
        Sprite.prototype.moveSpriteToBottom = function(){
            this.newPos = this.myPosY + this.getHorizontalSpriteHeight()+this.sensV;
            this.boite.style.top = (this.newPos >= toolBox.screenHeight ? toolBox.screenHeight - this.getHorizontalSpriteHeight() 
                                                                        : this.newPos - this.getHorizontalSpriteHeight()) + 'px';
        };     
        // --------------------------------------------------------------
        Sprite.prototype.moveSpriteToTop = function(){
            this.newPos = this.myPosY + this.sensV;  
            this.boite.style.top = (this.newPos >= 0 ? this.newPos : 0) + 'px';
        };
        // --------------------------------------------------------------
        Sprite.prototype.animeFrame = function(currentTimeStamp){
            if (this.timestampInitial === undefined) {
                this.timestampInitial = currentTimeStamp;
            }
            if ((currentTimeStamp - this.timestampInitial) > this.animSpeed) {                           
                this.timestampInitial = currentTimeStamp;

                if (((this.sensAnimFrames > 0) && (this.frameActif >= this.frameDeFin)) || 
                    ((this.sensAnimFrames < 0) && (this.frameActif <= this.frameDeDebut))){
                    if (this.typeCycleAnimationFrames === 0){    
                        this.sensAnimFrames *= -1
                    } else {
                        this.frameActif = this.frameDeDebut;
                    }
                }

                this.frameActif = this.frameActif + this.sensAnimFrames;                
                this.masque.style.width = this.getHorizontalSpriteWidth()+'px';
                this.masque.style.height = this.getHorizontalSpriteHeight()+'px';

                if (this.sensH > 0){                                                  // vers la droite            
                    this.sprite.style.left = this.getRightOffset()+'px';              
                } else {                                                              // vers la gauche            
                    this.sprite.style.left = this.getLeftOffset()+'px';               
                } 
                this.sprite.style.top = this.getTopOffset()+'px';               
            }
            
            if (this.animationOn){
                this.animationCaller();
            }
        };
        // --------------------------------------------------------------

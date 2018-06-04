        // *************************************************************************
        // ***    Lettres : Objet affichant les lettres sous formes de dessin    ***
        // ***                                                                   ***
        // *** Objet : Lettres                                                   ***
        // ***                                                                   ***
        // *** Cet objet sert à gérer :                                          ***
        // ***   - L'affichage de lettres "Dessins"                              ***
        // ***                                                                   ***
        // ***  Nécessite :                                                      ***
        // ***      Une variable pour son instanciation                          ***
        // ***                                                                   ***
        // *************************************************************************

        function Lettres(pBoite, pMasque, pSprite) {              // Fonction constructeur d        
            this.tabLettres = ['V','I','C','T','O','R','E'],
            this.image = 'images/LooneyTunesCouleur.png',
            this.idBoite = pBoite;          // variable de l'ID HTML de la boite contenant le masque et le sprite
            this.idMasque = pMasque;        // variable de l'ID HTML du masque contenant le sprite
            this.idSprite = pSprite         // variable de l'ID HTML du sprite (Image )
            this.boite;                     // Instance de la boite contenant le masque et le sprite
            this.masque;                    // variable du masque contenant le sprite
            this.sprite;                    // variable du sprite (Image )
            this.currentPoint = 0;          // variable i,ntermédiaire avec l'objet "Score"

            this.lettres = [
                { 
                    top: -430,       // Lettre "V"
                    left: -427,
                    height: 76,
                    width: 82
                },{ 
                    top: -145,       // Lettre "I"
                    left: -228,
                    height: 76,
                    width: 35
                },{ 
                    top: -4,       // Lettre "C"
                    left: -225, 
                    height: 76,
                    width: 63
                },{ 
                    top: -429,       // Lettre "T"
                    left: -207,
                    height: 78,
                    width: 73
                },{ 
                    top: -289,       // Lettre "O"
                    left: -264,
                    height: 76,
                    width: 76
                },{ 
                    top: -429,       // Lettre "R"
                    left: -3,
                    height: 81,
                    width: 72
                },{ 
                    top: -2,       // Lettre "E"
                    left: -442,
                    height: 78,
                    width: 59
            }];
        }
        // -------------------------------------------------------------------------
        Lettres.prototype.initVar = function(){
            this.boite = document.getElementById(this.idBoite);            
            this.masque = document.getElementById(this.idMasque);
            this.sprite = document.getElementById(this.idSprite);        
        };
        // -------------------------------------------------------------------------
        Lettres.prototype.getCurrentPoint = function(){
            return this.currentPoint;
        }
        // --------------------------------------------------------------
        Lettres.prototype.afficheLettre = function(pLettre, pStartPoint, pCurrentPoint){
            this.currentPoint = pCurrentPoint;            
            var maData = this.tabLettres.indexOf(pLettre);

            this.sprite.style.left = this.lettres[maData].left + 'px'; 
            this.sprite.style.top = this.lettres[maData].top + 'px'; 

            this.masque.style.width = this.lettres[maData].width + 'px'; 
            this.masque.style.height = this.lettres[maData].height + 'px'; 

            this.boite.style.width = this.lettres[maData].width + 'px'; 
            this.boite.style.height = this.lettres[maData].height + 'px'; 

            this.boite.style.left = pStartPoint + this.currentPoint+'px'; 
            this.boite.style.top = 350 + (90 - (this.lettres[maData].height)) / 2 + 'px'; 

            this.currentPoint = this.currentPoint + this.lettres[maData].width + 10; 
        }
        // --------------------------------------------------------------

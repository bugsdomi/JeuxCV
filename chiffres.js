        // *************************************************************************
        // ***    Chiffres : Objet affichant les chiffres sous formes de dessin  ***
        // ***                                                                   ***
        // *** Objet : Chiffres                                                  ***
        // ***                                                                   ***
        // *** Cet objet sert à gérer :                                          ***
        // ***   - L'affichage de chiffres "Dessins"                             ***
        // ***                                                                   ***
        // ***  Nécessite :                                                      ***
        // ***      Une variable pour son instanciation                          ***
        // ***                                                                   ***
        // *************************************************************************

        function Chiffres(pBoite, pMasque, pSprite) {              // Fonction constructeur d        
            this.tabChiffres = ['0','1','2','3','4','5','6','7','8','9','/'],
            this.image = 'images/LooneyTunesCouleur.png',
            this.idBoite = pBoite;          // variable de l'ID HTML de la boite contenant le masque et le sprite
            this.idMasque = pMasque;        // variable de l'ID HTML du masque contenant le sprite
            this.idSprite = pSprite         // variable de l'ID HTML du sprite (Image )
            this.boite;                     // Instance de la boite contenant le masque et le sprite
            this.masque;                    // variable du masque contenant le sprite
            this.sprite;                    // variable du sprite (Image )
            this.currentPoint = 0;          // variable i,ntermédiaire avec l'objet "Score"

            this.chiffres = [
                { 
                    top: -718,       // Chiffre 0
                    left: -5,
                    height: 75,
                    width: 70
                },{ 
                    top: -719,       // Chiffre 1
                    left: -77,
                    height: 73,
                    width: 49
                },{ 
                    top: -718,       // Chiffre 2
                    left: -134, 
                    height: 74,
                    width: 57
                },{ 
                    top: -718,       // Chiffre 3
                    left: -195,
                    height: 75,
                    width: 56
                },{ 
                    top: -719,       // Chiffre 4
                    left: -256,
                    height: 73,
                    width: 68
                },{ 
                    top: -719,       // Chiffre 5
                    left: -329,
                    height: 74,
                    width: 54
                },{ 
                    top: -718,       // Chiffre 6
                    left: -388,
                    height: 75,
                    width: 65
                },{ 
                    top: -719,       // Chiffre 7
                    left: -455,
                    height: 73,
                    width: 57
                },{ 
                    top: -718,        // Chiffre 8
                    left: -513,
                    height: 75,
                    width: 64
                },{ 
                    top: -718,         // Chiffre 9
                    left: -580,
                    height: 75,
                    width: 65
                },{ 
                    top: -992,         // Caractère "/"
                    left: -242,
                    height: 82,
                    width: 44
            }];
        }
        // -------------------------------------------------------------------------
        Chiffres.prototype.initVar = function(){
            this.boite = document.getElementById(this.idBoite);            
            this.masque = document.getElementById(this.idMasque);
            this.sprite = document.getElementById(this.idSprite);        
        };
        // -------------------------------------------------------------------------
        Chiffres.prototype.getCurrentPoint = function(){
            return this.currentPoint;
        }
        // --------------------------------------------------------------
        Chiffres.prototype.afficheChiffre = function(pChiffre, pStartPoint, pCurrentPoint){
            this.currentPoint = pCurrentPoint;            
            var maData = this.tabChiffres.indexOf(pChiffre);
            this.sprite.style.left = this.chiffres[maData].left + 'px'; 
            this.sprite.style.top = this.chiffres[maData].top + 'px'; 

            this.masque.style.width = this.chiffres[maData].width + 'px'; 
            this.masque.style.height = this.chiffres[maData].height + 'px'; 

            this.boite.style.width = this.chiffres[maData].width + 'px'; 
            this.boite.style.height = this.chiffres[maData].height + 'px'; 

            this.boite.style.left = pStartPoint + this.currentPoint+'px'; 
            this.boite.style.top = '90%'; 

            this.currentPoint = this.currentPoint + this.chiffres[maData].width + 10; 
        }
        // --------------------------------------------------------------

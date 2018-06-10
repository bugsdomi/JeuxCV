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
            this.idBoite = pBoite;          // variable de l'ID HTML de la boite contenant le masque et le sprite
            this.idMasque = pMasque;        // variable de l'ID HTML du masque contenant le sprite
            this.idSprite = pSprite         // variable de l'ID HTML du sprite (Image )
            this.boite;                     // Instance de la boite contenant le masque et le sprite
            this.masque;                    // variable du masque contenant le sprite
            this.sprite;                    // variable du sprite (Image )
            this.currentPoint = 0;          // variable i,ntermédiaire avec l'objet "Score"

            this.chiffres = [
                { 
                    image: 'images/ChiffreZero.png',
                    top: 90.05,
                    height: 7.46,
                    width: 3.65
                },{ 
                    image: 'images/ChiffreUn.png',
                    top: 90.05,
                    height: 7.26,
                    width: 2.55
                },{ 
                    image: 'images/ChiffreDeux.png', 
                    top: 90.05,
                    height: 7.36,
                    width: 2.97
                },{ 
                    image: 'images/ChiffreTrois.png', 
                    top: 89.55,
                    height: 7.36,
                    width: 2.92
                },{ 
                    image: 'images/ChiffreQuatre.png',
                    top: 91.34,
                    height: 7.26,
                    width: 3.23
                },{ 
                    image: 'images/ChiffreCinq.png',
                    top: 91.64,
                    height: 7.36,
                    width: 2.81
                },{ 
                    image: 'images/ChiffreSix.png',
                    top: 90.35,
                    height: 7.46,
                    width: 3.39
                },{ 
                    image: 'images/ChiffreSept.png',
                    top: 90.05,
                    height: 7.26,
                    width: 2.97
                },{ 
                    image: 'images/ChiffreHuit.png',
                    top: 90.75,
                    height: 7.46,
                    width: 3.33
                },{ 
                    image: 'images/ChiffreNeuf.png',
                    top: 91.54,
                    height: 7.46,
                    width: 3.39
                },{ 
                    image: 'images/slash.png',
                    top: 90.05,
                    height: 8.16,
                    width: 2.29
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
            this.sprite.src=this.chiffres[maData].image;

            this.boite.style.width = this.chiffres[maData].width + '%'; 
            this.boite.style.height = this.chiffres[maData].height + '%'; 
            this.masque.style.height = '100%'; 
            this.masque.style.width = '100%'; 
            this.sprite.style.width = '100%';
            this.sprite.style.height = '100%';

            this.boite.style.left = pStartPoint + this.currentPoint+'%'; 
            this.boite.style.top = '90%'; 
            this.currentPoint = this.currentPoint + this.chiffres[maData].width +0.25; 
        }
        // --------------------------------------------------------------

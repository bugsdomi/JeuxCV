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
            this.tabLettres = ['0','1','2','3','4','5','6','7','8','9','/','[',']',' ','C','D','E','F','I','J','O','P','R','T','U','V'],
            this.idBoite = pBoite;          // variable de l'ID HTML de la boite contenant le masque et le sprite
            this.idMasque = pMasque;        // variable de l'ID HTML du masque contenant le sprite
            this.idSprite = pSprite         // variable de l'ID HTML du sprite (Image )
            this.boite;                     // Instance de la boite contenant le masque et le sprite
            this.masque;                    // variable du masque contenant le sprite
            this.sprite;                    // variable du sprite (Image )
            this.currentPoint = 0;          // variable i,ntermédiaire avec l'objet "Score"

            this.lettres = [
                    { 
                        image: 'images/ChiffreZero.png',
                        height: 7.46,
                        width: 3.65
                    },{ 
                        image: 'images/ChiffreUn.png',
                        height: 7.26,
                        width: 2.55
                    },{ 
                        image: 'images/ChiffreDeux.png', 
                        height: 7.36,
                        width: 2.97
                    },{ 
                        image: 'images/ChiffreTrois.png', 
                        height: 7.36,
                        width: 2.92
                    },{ 
                        image: 'images/ChiffreQuatre.png',
                        height: 7.26,
                        width: 3.23
                    },{ 
                        image: 'images/ChiffreCinq.png',
                        height: 7.36,
                        width: 2.81
                    },{ 
                        image: 'images/ChiffreSix.png',
                        height: 7.46,
                        width: 3.39
                    },{ 
                        image: 'images/ChiffreSept.png',
                        height: 7.26,
                        width: 2.97
                    },{ 
                        image: 'images/ChiffreHuit.png',
                        height: 7.46,
                        width: 3.33
                    },{ 
                        image: 'images/ChiffreNeuf.png',
                        height: 7.46,
                        width: 3.39
                    },{ 
                        image: 'images/slash.png',
                        height: 8.16,
                        width: 2.29
                    },{ 
                        image: 'images/LettreCrochetG.png',
                        height: 8.96,
                        width: 1.72
                    },{ 
                        image: 'images/LettreCrochetD.png',
                        height: 8.96,
                        width: 1.67
                    },{ 
                        image: 'images/LettreEspace.png',
                        height: 7.56,
                        width: 3.96
                    },{ 
                        image: 'images/LettreC.png', 
                        height: 7.56,
                        width: 3.28
                    },{ 
                        image: 'images/LettreD.png', 
                        height: 7.46,
                        width: 3.70
                    },{ 
                        image: 'images/LettreE.png',
                        height: 7.76,
                        width: 3.07
                    },{ 
                        image: 'images/LettreF.png',
                        height: 7.56,
                        width: 2.97
                    },{ 
                        image: 'images/LettreI.png',
                        height: 7.56,
                        width: 1.82
                    },{ 
                        image: 'images/LettreJ.png',
                        height: 7.36,
                        width: 2.60
                    },{ 
                        image: 'images/LettreO.png',
                        height: 7.56,
                        width: 3.96
                    },{ 
                        image: 'images/LettreP.png',
                        height: 7.46,
                        width: 3.65
                    },{ 
                        image: 'images/LettreR.png',
                        height: 8.06,
                        width: 3.75
                    },{ 
                        image: 'images/LettreT.png', 
                        height: 7.76,
                        width: 3.80
                    },{ 
                        image: 'images/LettreU.png',
                        height: 7.86,
                        width: 3.65
                    },{ 
                        image: 'images/LettreV.png',
                        height: 7.56,
                        width: 4.27
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
        Lettres.prototype.afficheLettre = function(pLettre, pStartPoint, pCurrentPoint,pTop){
            this.currentPoint = pCurrentPoint;            
            var maData = this.tabLettres.indexOf(pLettre);
            this.sprite.src=this.lettres[maData].image;

            this.boite.style.width = this.lettres[maData].width + '%'; 
            this.boite.style.height = this.lettres[maData].height + '%'; 
            this.masque.style.height = '100%'; 
            this.masque.style.width = '100%'; 
            this.sprite.style.width = '100%';
            this.sprite.style.height = '100%';

            this.boite.style.left = pStartPoint + this.currentPoint+'%'; 
            this.boite.style.top = pTop; 
            this.currentPoint = this.currentPoint + this.lettres[maData].width + 0.25; 
        }
        // --------------------------------------------------------------

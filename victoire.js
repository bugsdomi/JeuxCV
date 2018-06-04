        // *************************************************************************
        // ***      Victoire : Objet gérant l'affichage du panneau de victoire   ***
        // ***                                                                   ***
        // *** Objet : Victoire                                                  ***
        // ***                                                                   ***
        // *** Cet objet sert à gérer :                                          ***
        // ***   - L'affichage du panneau de victoire                            ***
        // ***                                                                   ***
        // ***  Nécessite :                                                      ***
        // ***      Une variable pour son instanciation                          ***
        // ***      Le module "lettres "                                         ***
        // ***                                                                   ***
        // *************************************************************************

        function Victoire(){           // Fonction constructeur 
            this.victory = 'VICTOIRE';

            this.dataLettres = 
            {
                lettre : [],          // Instance pour les 5 caractères du victoire
                maxLettres : 8,       // ==> 8 caractères dans le victoire "XX/YY"
                startPoint : 0,       // Point de départ des écritures
                currentPoint : 0      // Position d'ecriture incrémentée
            }
        }
        // -------------------------------------------------------------------------
        Victoire.prototype.initVar = function(){
            for (var i=0; i < this.dataLettres.maxLettres; i++){
                this.dataLettres.lettre[i] = new Lettres('idBoiteLettre'+i,'idMasqueLettre'+i,'idSpriteLettre'+i);
                this.dataLettres.lettre[i].initVar();      
            }
        };
        // -------------------------------------------------------------------------
        Victoire.prototype.afficheVictoire = function(){
            this.dataLettres.startPoint = 650;
            this.dataLettres.currentPoint = 0;
            this.victory = 'VICTOIRE'
            
            for (var i=0; i < this.victory.length; i++){ 
                this.dataLettres.lettre[i].afficheLettre(this.victory[i], this.dataLettres.startPoint, this.dataLettres.currentPoint);
                this.dataLettres.currentPoint = this.dataLettres.lettre[i].getCurrentPoint();            
            }
        }
    // -------------------------------------------------------------------------


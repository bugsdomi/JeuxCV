        // *************************************************************************
        // ***      Score : Objet gérant l'affichage du score                    ***
        // ***                                                                   ***
        // *** Objet : Score                                                     ***
        // ***                                                                   ***
        // *** Cet objet sert à gérer :                                          ***
        // ***   - L'affichage du score des compétences gagnées                  ***
        // ***                                                                   ***
        // ***  Nécessite :                                                      ***
        // ***      Une variable pour son instanciation                          ***
        // ***      Le module "Chiffres"                                         ***
        // ***                                                                   ***
        // *************************************************************************

        function Score(){             // Fonction constructeur 
            this.scoreActuel = 0;
            this.scoreComplet = this.scoreActuel + '/' + dataBipBip.maxCompetences;

            this.dataChiffres= 
            {
                chiffre : [],         // Instance pour les 5 caractères du score
                maxChiffres : 5,      // ==> 5 caractères dans le score "XX/YY"
                startPoint : 0,       // Point de départ des écritures
                currentPoint : 0,     // Position d'ecriture incrémentée
            }
        }
        // -------------------------------------------------------------------------
        Score.prototype.initVar = function(){
            for (var i=0; i < this.dataChiffres.maxChiffres; i++){
                this.dataChiffres.chiffre[i] = new Chiffres('idBoiteChiffre'+i,'idMasqueChiffre'+i,'idSpriteChiffre'+i);
                this.dataChiffres.chiffre[i].initVar();      
            }
            this.scoreActuel = 0;
            this.AfficheScore();
        };
        // -------------------------------------------------------------------------
        Score.prototype.AfficheScore = function(){
            this.scoreComplet = this.scoreActuel + '/' + dataBipBip.maxCompetences;

            if (this.scoreActuel < 10)
            this.dataChiffres.startPoint = this.scoreActuel < 10 ? 1600 : 1500;
            this.dataChiffres.currentPoint = 0;
            
            for (var i=0; i < this.scoreComplet.length; i++){ 
                this.dataChiffres.chiffre[i].afficheChiffre(this.scoreComplet[i], this.dataChiffres.startPoint, this.dataChiffres.currentPoint);
                this.dataChiffres.currentPoint = this.dataChiffres.chiffre[i].getCurrentPoint();
            }
        }
    // -------------------------------------------------------------------------


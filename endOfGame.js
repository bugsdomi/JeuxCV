        // *************************************************************************
        // ***      EndOfGame : Objet gérant l'affichage de la victoire ou de la ***
        // ***                  défaite                                          ***
        // ***                                                                   ***
        // *** Objet : EndOfGame                                                 ***
        // ***                                                                   ***
        // *** Cet objet sert à gérer :                                          ***
        // ***   - L'affichage du panneau de victoire ou de défaite              ***
        // ***                                                                   ***
        // ***  Nécessite :                                                      ***
        // ***      Une variable pour son instanciation                          ***
        // ***      Le module "lettres "                                         ***
        // ***                                                                   ***
        // *************************************************************************

        function EndOfGame(){         // Fonction constructeur 
            this.currentPoint = 0;    // Position d'ecriture incrémentée
            this.statusEndOfGame;     // Statut du jeu : Perdu ou gagné

            this.victoire = 
                {
                    msg: 'VICTOIRE',
                    lettre : [],        // Instance pour les 8 caractères du mot "Victoire"
                    startPoint : 37     // Position de départ (en%) de l'écriture
                }

            this.defaite = 
                {
                    msg: 'PERDU',
                    lettre : [],        // Instance pour les 5 caractères du mot "Perdu" 
                    startPoint : 39     // Position de départ (en%) de l'écriture
                }

            this.rejouer = 
            {
                msg: '[F5] POUR REJOUER',
                lettre : [],        // Instance pour les 17 caractères de la phrase "[F5] pour rejouer" 
                startPoint : 21     // Position de départ (en%) de l'écriture
            }            
        }
        // -------------------------------------------------------------------------
        EndOfGame.prototype.initVar = function(){

            // Initialisation du mot "Victoire"
            for (var i=0; i < this.victoire.msg.length; i++){
                this.victoire.lettre[i] = new Lettres('idBoiteLettre'+i,'idMasqueLettre'+i,'idSpriteLettre'+i);
                this.victoire.lettre[i].initVar();      
            }

            // Initialisation du mot "Perdu"
            for (var i=0; i < this.defaite.msg.length; i++){
                this.defaite.lettre[i] = new Lettres('idBoiteLettre'+(i+8),'idMasqueLettre'+(i+8),'idSpriteLettre'+(i+8));
                this.defaite.lettre[i].initVar();      
            }

            //  Initialisation de la pharse "[F5] POUR REJOUER"
            for (var i=0; i < this.rejouer.msg.length; i++){
                this.rejouer.lettre[i] = new Lettres('idBoiteLettre'+(i+13),'idMasqueLettre'+(i+13),'idSpriteLettre'+(i+13));
                this.rejouer.lettre[i].initVar();      
            }

            this.currentPoint = 0;
        };
        // -------------------------------------------------------------------------
        EndOfGame.prototype.displayEndOfGameMsg = function(pStatusEndOfGame){
            this.statusEndOfGame = pStatusEndOfGame

            for (var i=0; i < this.statusEndOfGame.msg.length; i++){ 
                this.statusEndOfGame.lettre[i].afficheLettre(this.statusEndOfGame.msg[i], this.statusEndOfGame.startPoint, this.currentPoint,'32%');
                this.currentPoint = this.statusEndOfGame.lettre[i].getCurrentPoint();            
            }

            this.currentPoint = 0;
            for (var i=0; i < this.rejouer.msg.length; i++){ 
                this.rejouer.lettre[i].afficheLettre(this.rejouer.msg[i], this.rejouer.startPoint, this.currentPoint,'55%');
                this.currentPoint = this.rejouer.lettre[i].getCurrentPoint();            
            }
        }
        // -------------------------------------------------------------------------


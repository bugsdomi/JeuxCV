        // ************************************************************************
        // ***                                                                  ***
        // *** Variables                                                        ***
        // ***                                                                  ***
        // *** Cet objet contient différentes variable générales                ***
        // *** Il s'entichira au fur et à mesure du temps de nouvelles méthodes ***
        // ***                                                                  ***
        // ************************************************************************
        // --------------------------------------------------------------
        var toolBox;                  // Instance de la boite à outil contenant des méthodes diverses
        var vilCoyote;                // Instance de Vil-Coyote
        var fondEcranSol;             // instance du fond d'écran representant le sol
        var fondEcranNuages;          // instance du fond d'écran representant les nuages
        var boiteControlPanel;        // Cadre contenant le panneau de controle de bas d'écran
        var objectKeyFrame;           // Instance du gestionnaire des KeyFrames
        var cvCourtBtn;               // variable du bouton CV "new Age"
        var cvLongBtn;                // variable du bouton CV "Old-School"
        var helpBtn;                  // variable du bouton 'Help' qui commande l'ouverture de l'écran d'aide
        var helpScreen;               // Variable del'écran d'aide
        var downloadCVBtn;            // variable du DownLoader 
        var browserName;              // Variable contenant le nom du browser
        var imgVictoire;              // Variable du message "Victoire"
        var imgPerdu;                 // Variable du message "Perdu"
        var imgRejouer;               // Variable du message "Rejouer"
        
        var dataVautours = 
                {
                vautour : [],         // Instance des ennemis vautours
                maxVautours : 5       // Nombre maxi de vautours simultanés 
                }

        var dataBipBip = 
                {
                bipBip: [],           // Table stockant les infos propres à chaque target Bip-Bip
                maxCompetences : 11,  // Nombre de compétences (actuellement 11)
                targetActif : 0,
                }
        // --------------------------------------------------------------



        // ************************************************************************
        // ***                                                                  ***
        // *** Variables                                                        ***
        // ***                                                                  ***
        // *** Cet objet contient différentes méthodes générales                ***
        // *** Il s'entichira au fur et à mesure du temps de nouvelles méthodes ***
        // ***                                                                  ***
        // *** - 1 Générateur de nombre aléatoire :                             ***
        // ***     - random(ValeurInférieure, ValeurSupérieure                  ***
        // ***                                                                  ***
        // ***  Nécessite :                                                     ***
        // ***      Une variable pour son instanciation                         ***
        // ***                                                                  ***
        // ************************************************************************
        // --------------------------------------------------------------
        var toolBox;                  // Instance de la boite à outil contenant des méthodes diverses
        var vilCoyote;                // Instance de Vil-Coyote
        var fondEcranSol;             // instance du fond d'écran representant le sol
        var fondEcranNuages;          // instance du fond d'écran representant les nuages
        var boiteControlPanel;        // Cadre contenant le panneau de controle de bas d'écran
        var objectKeyFrame;           // Instance du gestionnaire des KeyFrames
        var score;                    // Instance de l'objet "Score"
        var victoire;                 // Instance de l'objet "Victoire"
        var cvCourt;                  // variable du CV "new Age"
        var cvLong;                   // variable du CV "Old-School"
        var downloadCV;               // variable du DownLoader 
        var browserNameAndVersion     // Instance du détécteur de Browser
        var browserName               // Variable contenant le nom du browser

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



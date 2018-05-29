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
        var objectKeyFrame;           // Instance du gestionnaire des KeyFrames
        var vautour = [];             // Instance des ennemis vautours
// XXXXXXXXXX Passer à 10
        var maxVautours = 5;         // Nombre maxi de vautours simultanés  
        // --------------------------------------------------------------



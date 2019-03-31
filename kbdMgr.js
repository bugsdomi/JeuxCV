        // ****************************************************************************
        // ***                                                                      ***
        // *** Objet : ObjectKeyboardMgr                                            ***
        // ***                                                                      ***
        // *** Cet objet sert à gérer la simultanéité de l'appui de plusieurs       ***
        // *** touches pour générer des effets combinés (ex : orientation et        ***
        // *** depacement et / ou tir et / ou effet spécial                         ***
        // ***                                                                      ***
        // *** A noter la présence d'elements visualisant le statut des touches     ***
        // *** dans une fenetre sous la forme de ronds rouges ou verts              ***
        // *** Ils ne servent qu'au développement et sont désactivés en Production  ***
        // ***                                                                      ***
        // ***  Nécessite :                                                         ***
        // ***      Une variable pour son instanciation                             ***
        // ***                                                                      ***
        // ***                                                                      ***
        // ****************************************************************************
        // ----------------------------------------------------------------------------
        function ObjectKeyboardMgr(){
            this.keyboardSpeed = 1;             // Délai d'interrogation du clavier ==> Vitesse de réaction au clavier (et donc de mouvement)
            this.idActionOnMgrInterval;         // Identifiant du SetInterval utilisé pour la gestion du clavier
            this.gestionKbdOnEnCours = false;   // Flag de gestion des touches appuyées lancée
            this.keyPressedMatrix = '';         // Cette matrice recense l'état instantané de pression de toutes les touches utilisées
            this.valueMatrixKbdWitness = 0;     // Objet affichant la somme des bits de la matrice des touches appuyées (Sert uniquement au devéloppement et debugage)
            this.bitMask = null;                // Récupère dans 1 variable unique le contenut du BitMask du tableau "keyMap" pour des raisons de vitesse car utilisée de multiples fois
            this.idxKeyOnCode = -1;             // Index dans le tableau "tabKeyIndexes" de la touche appuyée
            this.idxKeyOffCode = -1;            // Index dans le tableau "tabKeyIndexes" de la touche relachée
                        
            // Tableau des touches clavier donnant l'index de position des infos liées dans le table "keyMap" (pour des raisons de vitesse d'exploration) 
            // On cherche la touche dans la table "tabKeyIndexes", et son "indexOf()" permet de sélectionner l'objet correspondant dans "keyMap") 
            // PS : la touche "null" est réservée pour un éventuel usage futur
            
            this.tabKeyIndexes = [27,null,32,13,40,38,37,39];

            this.keyMap =            // Toutes les propriétés "witnessButton" ne servent uniquement qu'au développement et au debugage
            [{
                valueAffectedBit: 128,
                witnessButton: null         
            },{
                valueAffectedBit: 64,
                witnessButton: null         
            },{
                valueAffectedBit: 32,
                witnessButton: null     
            },{
                valueAffectedBit: 16,
                witnessButton: null
            },{
                valueAffectedBit: 8,
                witnessButton: null
            },{
                valueAffectedBit: 4,
                witnessButton: null
            },{
                valueAffectedBit: 2,
                witnessButton: null
            },{
                valueAffectedBit: 1,
                witnessButton: null
            }];
        }
        
        // ------------------------------------------------------------------------------------
        // Méthodes prototypées de l'objet "ObjectKeyBoardManager"
        // ------------------------------------------------------------------------------------

        // ------------------------------------------------------------------------------------
        // Les prioritées sont classées de la plus importante en haut de la liste à la plus 
        // faible et en cas d'antagonisme des touches (ex G et D), c est celui qui est plus haut 
        // qui l'emporte 
        // -------------------------------------------------------------------------------------
        ObjectKeyboardMgr.prototype.actionOnMgr = function(){                                                          // touche 'Esc' --> On sort et Go to menu : Priorié maximum 
            if ((this.keyPressedMatrix & 128) === 128){
                helpScreen.style.display = 'none';
                return
            };                           
            (this.keyPressedMatrix & 1) === 1 ? vilCoyote.changeDirectionHMod({ sens: 'sensV', valeur: '0'},           // 1 - "A droite" 
                                                                            vilCoyote.initFrameToRight,
                                                                            { sens: 'sensH', valeur: vilCoyote.pas},
                                                                            vilCoyote.moveSpriteToRight,
                                                                            vilCoyote.screenCollideOn) : '';                     
            (this.keyPressedMatrix & 2) === 2 ? vilCoyote.changeDirectionHMod({ sens: 'sensV', valeur: '0'},           // 2 - "A gauche" 
                                                                            vilCoyote.initFrameToLeft,
                                                                            { sens: 'sensH', valeur: -vilCoyote.pas},
                                                                            vilCoyote.moveSpriteToLeft,
                                                                            vilCoyote.screenCollideOn) : '';     
            (this.keyPressedMatrix & 4) === 4 ? vilCoyote.changeDirectionVMod(-1,vilCoyote.moveSpriteToTop) : '';      // 4 - "En haut"
            (this.keyPressedMatrix & 8) === 8 ? vilCoyote.changeDirectionVMod(1,vilCoyote.moveSpriteToBottom) : '';    // 8 - "En bas" 
            (this.keyPressedMatrix & 32) === 32 ? vilCoyote.shoot() : '';                                              // 32 - "ESPACE" --> Tir
            (this.keyPressedMatrix & 16) === 16 ? vilCoyote.setSpinVilCoyote() : '';                                   // 16 - "ENTER" --> Spin Vil-Coyote
        }
        // --------------------------------------------------------------
        ObjectKeyboardMgr.prototype.gereAppuiTouche = function(event){

            this.idxKeyOnCode = this.tabKeyIndexes.indexOf(event.keyCode||event.which);
            if (((this.idxKeyOnCode>-1) && (!vilCoyote.bloqueClavier)) || (this.idxKeyOnCode === 0)){
                this.bitMask = this.keyMap[this.idxKeyOnCode].valueAffectedBit;  // Récupération du bit dans la matrice correspondant à la touche
                this.keyPressedMatrix = this.keyPressedMatrix | this.bitMask;    // "OU" logique pour positionner le bit correspondant dans la matrice

                if (this.gestionKbdOnEnCours === false){
                    this.idActionOnMgrInterval = window.setInterval(this.actionOnMgr.bind(this),this.keyboardSpeed);
                    this.gestionKbdOnEnCours = true;
                }
            }
        }
        // ------------------------------------------------------------------------------------
        // Les prioritées sont classées de la plus importante en haut de la liste à la plus 
        // faible et en cas d'antagonisme des touches (ex G et D), c est celui qui est plus haut 
        // qui l'emporte 
        // ------------------------------------------------------------------------------------
        ObjectKeyboardMgr.prototype.actionOffMgr = function(){
            this.idxKeyOffCode === 3 ? vilCoyote.unsetSpinVilCoyote() : '';              // 16 - "ENTER" --> Spin Vil-Coyote
            vilCoyote.refreshAnimFlottementModule();
        }
        // --------------------------------------------------------------
        ObjectKeyboardMgr.prototype.gereReleaseTouche = function(event){
            this.idxKeyOffCode = this.tabKeyIndexes.indexOf(event.keyCode||event.which);
            if (this.idxKeyOffCode > -1){ 
                this.actionOffMgr();
                this.bitMask = this.keyMap[this.idxKeyOffCode].valueAffectedBit;  // Récupération du bit dans la matrice correspondant à la touche relachée
                this.bitMask = ~(this.bitMask);                                   // Inversion des bits du BitMask
                this.keyPressedMatrix = (this.keyPressedMatrix & this.bitMask);   // Mise a 0 des bits filtrés et selection du seul bit utile (&) 
            }
        };  
        // --------------------------------------------------------------
        

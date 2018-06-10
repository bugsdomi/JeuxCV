        // ************************************************************************
        // ***                                                                  ***
        // *** Objet : ObjectKeyframe                                           ***
        // ***                                                                  ***
        // *** Cet objet sert à prendre la main sur les KeyFrames pour les      ***
        // *** manipuler  (Changer le sens,la portée,le temps pour l execution...)*
        // ***                                                                  ***
        // ***  Nécessite :                                                     ***
        // ***      Une variable pour son instanciation                         ***
        // ***                                                                  ***
        // ************************************************************************
        function ObjectKeyFrame(){
            this.myStyleSheet;     // Référence à la feuille de style CSS
            this.myRules = '';         // Références aux blocs de règles de la feuille de style
            this.keyFrameFrom = 0;     // Position de départ en pixels de l'animation
            this.oldAnimName = '';     // Nom de l'ancien "@keyFrames" de l'animation 
            this.newAnimName = '';     // Nom du nouveau "@keyFrames" de l'animation 
            this.keyFrameTo = 0;       // Position de fin en pixels de l'animation
        }
        // --------------------------------------------------------------
        // Méthodes prototypées de l'objet "ObjectKeyFrame"
        // Cette méthode efface les anciennes regles "KeyFrame" 
        // et les recrée avec les nouvelles valeurs
        // --------------------------------------------------------------
        ObjectKeyFrame.prototype.changeKeyFrameRule = function(){
            this.myStyleSheet = document.styleSheets[0];
            this.myRules = this.myStyleSheet.cssRules;

            var found = false;
            var i = 0;

            while ((!found) && (i < this.myRules.length)){
                if ((this.myRules[i].type === window.CSSRule.KEYFRAMES_RULE) && 
                    this.myRules[i].name === this.oldAnimName){

                    this.myStyleSheet.deleteRule(i);
                    this.myStyleSheet.insertRule(this.newRules, 0);
                    found = true;
                }
                i++;           
            }
        }
        // ---------------------------------------------------------------------------------------------------------
        // Cette fonction change dynamiquement les portées des KeyFrames lorsqu'on interrompt les animations pour les 
        // inverser par exemple, sans qu'elles se réinitialisent et repartent de leur position actuelle dans l'autre sens 
        // (sans rupture ni saut visible à l'écran, tout en fluidité)
        // S'applique à des animations simples de sprites, répétitives, et sans conditions particulières 
        // ---------------------------------------------------------------------------------------------------------
        ObjectKeyFrame.prototype.upDateKeyFrames = function(pObject,pName,pFrom,pTo,pProperty,pValueFrom,pValueTo){

            pObject.sensAnimation *= -1;
            this.keyFrameFrom = pValueFrom+'px';
            this.keyFrameTo = pValueTo+'px';
            
            pObject.boite.style.top = pValueFrom+'px';
            pObject.boite.style.animationName = '';
            
            // Ce mecanisme d'alternance de noms permet la réinitialisation mémoire des anciennes données "KeyFrames"
            // et la prise en compte des nouvelles valeurs "KeyFrames"
            if (pObject.sensAnimation < 0){
                this.newAnimName = pName;          
                this.oldAnimName = pName+'1';          
            } else {
                this.newAnimName = pName+'1';
                this.oldAnimName = pName;
            }
            
            this.newRules =   '@keyframes ' + this.newAnimName 
                                            + pFrom + pProperty +': '+ this.keyFrameFrom+';} '
                                            + pTo + pProperty + ': '+ this.keyFrameTo+';}}';
            
            this.changeKeyFrameRule(); 
            pObject.boite.style.animationName = this.newAnimName;
            pObject.boite.style.animationPlayState = 'running';
        }
        // --------------------------------------------------------------

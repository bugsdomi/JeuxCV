var browserNameAndVersion = {
    browser:'',
    version:'',
    posBrowserName:'',
    posBrowserVersion: '',
    userAgent: '',
    
    getBrowserName: function(){
      this.userAgent = navigator.userAgent;

      this.browser = 'MSIE';
      this.posBrowserName = this.userAgent.indexOf(this.browser);
      this.posBrowserVersion = 4;

      if (this.posBrowserName == -1){
        this.browser = 'Firefox';
        this.posBrowserName = this.userAgent.indexOf(this.browser);
        this.posBrowserVersion = 7;          
        } 
        
      if (this.posBrowserName == -1){
        this.browser = 'Edge';
        this.posBrowserName = this.userAgent.indexOf(this.browser);
        this.posBrowserVersion = 4;          
      } 
      
      if(this.posBrowserName == -1){
        this.browser = 'OPR';
        this.posBrowserName = this.userAgent.indexOf(this.browser);
        this.browser = 'Opera';
        this.posBrowserVersion = 3;
      } 
      
      if(this.posBrowserName == -1){
        this.browser = 'Chrome';
        this.posBrowserName = this.userAgent.indexOf(this.browser);
        this.posBrowserVersion = 6;            
      } 
      
      if(this.posBrowserName == -1){
        this.browser = 'Trident';                 
        this.posBrowserName = this.userAgent.indexOf(this.browser);
      
        if(this.posBrowserName != -1){
          this.posBrowserName = this.userAgent.indexOf('rv');
          this.browser = 'MSIE';
          this.posBrowserVersion = 2;
        }
      } 
      
      if(this.posBrowserName == -1){
        this.browser = 'Safari';
        this.posBrowserName = this.userAgent.indexOf(this.browser);
        if( this.posBrowserName != -1){
          this.posBrowserName = this.userAgent.indexOf('Version');
          this.posBrowserVersion = 7;
        }
      }

      if(this.posBrowserName == -1){
        this.browser='Inconnu';
      }
      
      return this.browser;                      
    },
      
  // =======================================================
    getBrowserVersion: function(){

      var posEspace;
      var posParentheseG;
      var posParentheseD ;
      var posSemiColumn;

      this.getBrowserName();
      
      if(this.browser != 'Inconnu'){
        this.posBrowserVersion++;                                      // Pour tenir compte du '/' entre le nom du browser et la version
        this.version= this.userAgent.substring(this.posBrowserName + this.posBrowserVersion);
        posEspace = this.version.indexOf(' ');
        posParentheseG = this.version.indexOf('(');
        posParentheseD = this.version.indexOf(')');
        posSemiColumn = this.version.indexOf(';');
          
        if((posParentheseG > 0) && (posParentheseG < posEspace)){
          posEspace = posParentheseG;
        }
  
        if((posParentheseD > 0) && (posParentheseD < posEspace)){
          posEspace = posParentheseD;
        }
        
        if((posSemiColumn > 0) && (posSemiColumn < posEspace)){
          posEspace = posSemiColumn;
        }
        
        if (posEspace == -1) 
          posEspace=this.version.length;
            
        this.version = this.version.substring(0, posEspace);
      } else {
        this.version='Inconnue';
      }

      return this.version;
    }
  }

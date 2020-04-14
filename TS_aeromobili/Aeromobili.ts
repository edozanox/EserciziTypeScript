interface ICompare {

    Higher(plane):boolean;        
    
}

abstract class Aeromobile implements ICompare {
    Sigla:string;
    constructor(sigla:string){
        this.Sigla = sigla;
    }

    get getCodAeromobile():string {
        return this.Sigla;
    }

    public Higher(plane: any ):boolean {
       
        var IsHigher: boolean;
                            
           if(plane instanceof Aliante && this instanceof Aliante)
           {
              var effAero1 = this.getEffAero;
              var effAero2 = plane.getEffAero;

              if(effAero1 > effAero2)              
                  IsHigher = true              
              else
                IsHigher = false;
           }
           else if (plane instanceof AereoMotore && this instanceof AereoMotore)
           {
               var potProp1 = this.getPotProp;
               var potProp2 = plane.getPotProp;
               
               if(potProp1 > potProp2)
                    IsHigher = true
               else
                    IsHigher = false;
           }         
          
        return IsHigher;
    }

}

class Aliante extends Aeromobile {
    EfficienzaAerodinamica : number;
    constructor (sigla:string, eff_aerodinam:number) {
        super(sigla)
        this.Sigla = sigla;
        this.EfficienzaAerodinamica = eff_aerodinam;
    }
    public get getEffAero() : number {
        return  this.EfficienzaAerodinamica;
    }    
}

class AereoMotore extends Aeromobile {
    PotenzaPropulsore:number;
    constructor(sigla:string, pot_prop:number) {
        super(sigla)
        this.Sigla = sigla;
        this.PotenzaPropulsore = pot_prop;
    }       
    public get getPotProp() : number {
        return this.PotenzaPropulsore;
    }
}

var boeing : AereoMotore = new AereoMotore("BG777", 10000);
var airbus :AereoMotore = new AereoMotore("AB878", 15000)
var alias : Aliante = new Aliante("AL969", 5000);
var compare: boolean = boeing.Higher(airbus);
if (compare)
{
    console.log("Il velivolo è PIÙ efficiente di quello comparato.");
}
else
{
    console.log("Il velivolo è MENO efficiente di quello comparato.");
}



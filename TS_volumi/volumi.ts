abstract class Figura {
    protected Altezza:number;
    constructor(altezza:number){
        this.Altezza = altezza;
    }

    abstract CalcolaArea():number;
    
    CalcolaVolume():number {
        return this.CalcolaArea() * this.Altezza;
    }

}

class Cilindro extends Figura {
    RaggioBase:number;    
    constructor(altezza:number, raggio:number){
       super(altezza);
        this.RaggioBase = raggio; 
        this.Altezza = altezza;
    }

    CalcolaArea():number{
        return (this.RaggioBase^2) * 3.14;        
    } 
    
    
}

class Parallelepipedo extends Figura {
    LatoA:number;
    LatoB:number;
    constructor(altezza:number, latoa:number, latob:number){
        super(altezza)
        this.Altezza = altezza;
        this.LatoA = latoa;
        this.LatoB = latob;
    }

    CalcolaArea():number {
        return this.LatoA * this.LatoB;
    }
}

var figUno:Figura = new Parallelepipedo(12,25,15);
var figDue:Figura = new Cilindro(30, 10);
var areaUno : number = figUno.CalcolaArea();
var volUno: number = figUno.CalcolaVolume();

console.log("Area parallelepipedo: " + areaUno + " cm^2");
console.log("Volume parallelepipedo: " + volUno + " cm^3");

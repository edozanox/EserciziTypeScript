interface ICompare {
    HigherQuantity(distributore):boolean;

}

class Distributore {
    Citta:string;
    Proprietario:string;    
    CostoLitro:number = 1.56;
    CapacitaLitro:number;
    Incasso:number;    
    Pompa : Pompa;
    
    constructor(citta:string, proprieta:string, cap_l:number){
        this.Citta = citta;
        this.Proprietario = proprieta;
        this.Pompa = new Pompa(cap_l);
    }
    
    //1 - RIFORNIMENTO
        //Scalare la qta di carburante dal totale;
        //Visualizzare prezzo in base alla qta acquistata;
        //Aggiornare l'incasso del distributore;
        //Stampa riepilogo info;
    //2 - INFO AGGIORNATE
        //Visualizzare q.tà disponibile di carburante
        //Visualizzare costo/L
    //3 - COMPARAZIONE
        //Tra due distributori, evidenziare quello con meno carburante;
    
      
    }

    class Pompa {
        private CapacitaSerb:number;
        protected StatoSerb:number;

        constructor(qta_serb:number){
            this.CapacitaSerb = qta_serb;
        }




    }
     


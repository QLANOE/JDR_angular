import { Injectable } from "@angular/core";
import { Jet } from "../model/jet.model";

@Injectable()
export class JetService {
    
  jetSimple(nbFace: number): number[] {
    let jet: Jet = new Jet(1, nbFace);
    return jet.jetNbDes();
  }

  jetMultiple(nbDe: number, nbFace: number) : number[] {
    let jet: Jet = new Jet(nbDe, nbFace);
    return jet.jetNbDes();
  }

  trierJet(tableau: number[]): number[]{
    return tableau.sort(function(a, b){return a-b});
  }

  jetRegex(jetString: string): number[]{

    let lireD: RegExp = /(\d+)d(\d+)/;
    var valeursDe = jetString.match(lireD)
  
    if(valeursDe==null){
      return null;
    }else{
      var nbDes = parseInt(valeursDe[1]);
      var nbFace = parseInt(valeursDe[2]);
      let jet: number[] = this.jetMultiple(nbDes, nbFace);
      return jet;
    }
  }
}

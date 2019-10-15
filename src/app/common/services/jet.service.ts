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
}

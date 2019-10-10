import { Component } from "@angular/core";
import { Jet } from "../../../common/model/jet.model";
import _ from "lodash";

@Component({
    selector: 'jet-classic',
    templateUrl: './jetClassic.component.html',
  })
export class JetClassicComponent {

  constructor() { }
  
  resultat: number[] = [0];
  nbDe: number = 1;
  nbFace: number = 2;
  affichage: string = 'Liste';
  somme: number = 0;

  jet(nbFace: number) {
    let jet: Jet = new Jet(1, nbFace);
    this.resultat = jet.jetNbDes();
    this.somme = this.resultat[0];
  }

  jetCustom() {
    let jet: Jet = new Jet(this.nbDe, this.nbFace)
    this.resultat = jet.jetNbDes();
    this.sommeResultat();
  }

  sommeResultat(){
    let sum: number = 0;
    _.forEach(this.resultat, function(value: number){
      sum += value;
    })
    this.somme = sum;
  }

  }

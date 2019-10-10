import { Component } from "@angular/core";
import { Jet } from "../../../common/model/jet.model";

@Component({
    selector: 'jet-classic',
    templateUrl: './jetClassic.component.html',
  })
export class JetClassicComponent {

  constructor() { }
  
  resultat: number[] = [0];
  nbDe: number = 1;
  nbFace: number = 2;

  jet(nbFace: number) {
    let jet: Jet = new Jet(1, nbFace);
    this.resultat = jet.jetNbDes();
  }

  jetCustom() {
    let jet: Jet = new Jet(this.nbDe, this.nbFace)
    this.resultat = jet.jetNbDes();
  }

  }

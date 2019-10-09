import { Component } from "@angular/core";
import { Jet } from "../../common/model/jet.model";

@Component({
    selector: 'jet',
    templateUrl: './jet.component.html',
  })
export class JetHomeComponent {

  constructor() { }
  
  resultat: number[] = [0];
  nbDe: number = 1;
  nbFace: number = 2;

  jetD4() {
    let jet: Jet = new Jet(1, 4);
    this.resultat = jet.jetNbDes();
  }
  jetD6() {
    let jet: Jet = new Jet(1, 6);
    this.resultat = jet.jetNbDes();
  }
  jetD8() {
    let jet: Jet = new Jet(1, 8);
    this.resultat = jet.jetNbDes();
  }
  jetD10() {
    let jet: Jet = new Jet(1, 10);
    this.resultat = jet.jetNbDes();
  }
  jetD12() {
    let jet: Jet = new Jet(1, 12);
    this.resultat = jet.jetNbDes();
  }
  jetD20() {
    let jet: Jet = new Jet(1, 20);
    this.resultat = jet.jetNbDes();
  }

  jetCustom() {
    let jet: Jet = new Jet(this.nbDe, this.nbFace)
    this.resultat = jet.jetNbDes();
  }

  }

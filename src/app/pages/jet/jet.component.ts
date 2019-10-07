import { Component } from "@angular/core";
import { Jet } from "../../common/model/jet.model";

@Component({
    selector: 'jet',
    templateUrl: './jet.component.html',
  })
export class JetHomeComponent {

  constructor() { }
  
  resultat: number = 0;

  jetD4() {
    let jet: Jet = new Jet(1, 4);
    this.resultat = jet.jetUnDe();
  }
  jetD6() {
    let jet: Jet = new Jet(1, 6);
    this.resultat = jet.jetUnDe();
  }
  jetD8() {
    let jet: Jet = new Jet(1, 8);
    this.resultat = jet.jetUnDe();
  }
  jetD10() {
    let jet: Jet = new Jet(1, 10);
    this.resultat = jet.jetUnDe();
  }
  jetD12() {
    let jet: Jet = new Jet(1, 12);
    this.resultat = jet.jetUnDe();
  }
  jetD20() {
    let jet: Jet = new Jet(1, 20);
    this.resultat = jet.jetUnDe();
  }

  }

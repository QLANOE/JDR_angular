import { Component } from "@angular/core";
import { JetService } from "../../../common/services/jet.service";
import  { forEach} from "lodash";

@Component({
    selector: 'jet-classic',
    templateUrl: './jetClassic.component.html',
    providers: [JetService]
  })
export class JetClassicComponent {

  constructor(private jetService: JetService) {}
  
  resultat: number[] = [0];
  nbDe: number = 1;
  nbFace: number = 2;
  affichage: string = 'Liste';
  somme: number = 0;

  jet(nbFace: number) {
    this.resultat = this.jetService.jetSimple(nbFace);
    this.somme = this.resultat[0];
  }

  jetCustom() {
    this.resultat = this.jetService.jetMultiple(this.nbDe, this.nbFace);
    this.sommeResultat();
    this.resultat = this.jetService.trierJet(this.resultat);
  }

  sommeResultat(){
    let sum: number = 0;
    forEach(this.resultat, function(value){
      sum += value;
    });
    this.somme = sum;
  }

  }

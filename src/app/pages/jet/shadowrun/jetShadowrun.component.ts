import { Component } from "@angular/core";
import { JetService } from "../../../common/services/jet.service";
//import _ from "lodash";

@Component({
    selector: 'jet-shadowrun',
    templateUrl: './jetShadowrun.component.html',
    providers: [JetService]
  })
export class JetShadowrunComponent {

  constructor(private jetService: JetService) {}
  
  resultat: number[] = [0];
  nbDe: number = 1;
  nbFace: number = 2;
  affichage: string = 'Liste';
  somme: number = 0;
  reussite: number = 0;
  echec: number = 0;
  fail: boolean = false;
  botch: boolean = false;

  jet(nbFace: number) {
    this.resultat = this.jetService.jetSimple(nbFace);
    this.somme = this.resultat[0];
  }

  jetCustom() {
    this.resultat = this.jetService.jetMultiple(this.nbDe, this.nbFace);
    this.sommeResultat();
    this.resultat = this.jetService.trierJet(this.resultat);
    this.analyse();
  }

  jetND6() {
    this.resultat = this.jetService.jetMultiple(this.nbDe, 6);
    this.sommeResultat();
    this.resultat = this.jetService.trierJet(this.resultat);
    this.analyse();
  }

  sommeResultat(){
    let sum: number = 0;
    this.resultat.forEach(value => {
      sum += value;
    })
    this.somme = sum;
  }

  analyse(){
      this.reussite = 0;
      this.echec = 0;
      this.fail = false;
      this.botch = false;
      this.resultat.forEach(value =>{
          if(value >= 5){
              this.reussite += 1;
          }
          if(value == 1){
            this.echec += 1;
        }
      })
      if(this.echec > this.resultat.length/2){
        this.fail = true;
      }
      if(this.reussite == 0 && this.echec > this.resultat.length/2){
        this.botch = true;
      }

  }

  }

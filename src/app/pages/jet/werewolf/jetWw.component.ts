import { Component } from "@angular/core";
import { JetService } from "../../../common/services/jet.service";
import { forEach } from "lodash";

@Component({
    selector: 'jet-ww',
    templateUrl: './jetWw.component.html',
    providers: [JetService]
  })
export class JetWerewolfComponent {

  constructor(private jetService: JetService) {}
  
  resultat: number[] = [0];
  nbDe: number = 1;
  nbFace: number = 2;
  affichage: string = 'Liste';
  somme: number = 0;
  reussite: number = 0;
  echec: number = 0;
  difficulte: number = 7;
  botch: boolean = false;

  jetCustom() {
    this.resultat = this.jetService.jetMultiple(this.nbDe, this.nbFace);
    this.sommeResultat();
    this.resultat = this.jetService.trierJet(this.resultat);
    this.analyse();
  }

  jetND10() {
    this.resultat = this.jetService.jetMultiple(this.nbDe, 10);
    this.sommeResultat();
    this.resultat = this.jetService.trierJet(this.resultat);
    this.analyse();
  }

  sommeResultat(){
    let sum: number = 0;
    forEach(this.resultat, function(value){
      sum += value;
    });
    this.somme = sum;
  }

  analyse(){
      this.reussite = 0;
      this.echec = 0;
      this.botch = false;
      this.resultat.forEach(value =>{
          if(value >= this.difficulte){
              this.reussite += 1;
          }
          if(value == 1){
            this.echec += 1;
        }
      })
      if(this.reussite == 0 && this.echec > 0){
        this.botch = true;
      }
      this.reussite -= this.echec;
      if(this.reussite < 0){
        this.reussite = 0;
      }
  }

  }

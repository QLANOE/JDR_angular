export class Jet {
  nbFace: number
  nbDes: number

  constructor(nbDes: number, nbFace: number) {
    this.nbFace = nbFace;
    this.nbDes = nbDes;
  }

  jetUnDe(): number{
    return Math.floor((Math.random() * this.nbFace) + 1);
  }

  jetNbDes(): number[]{
    let resultatsJet: Array<number>  = [];
    for (let i = 0; i < this.nbDes; i++) {
      resultatsJet.push(this.jetUnDe());
    }
    return resultatsJet;
  }

}

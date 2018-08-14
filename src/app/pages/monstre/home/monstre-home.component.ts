import { Component } from "@angular/core";
import {TestService} from "../../../common/services/service.test";
import { Observable } from "rxjs";

@Component({
    selector: 'monstre-home',
    templateUrl: './monstre-home.component.html'
  })
export class MonstreHomeComponent {

  constructor(public testService: TestService) { }

  test: string;

  ngOnInit(){
    this.getApi().subscribe(
      (result) => {
        this.test = result;
      }

    );
  }

  getApi(): Observable<string> {
    return this.testService.getMe();
  }

  }

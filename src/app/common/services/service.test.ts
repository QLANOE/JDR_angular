import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs/Observable";


@Injectable()
export class TestService{

    constructor(private http: HttpClient) {}
    getMe(): Observable<string> {
      return this.http.get('/api/', { responseType: 'text'});
    }

}

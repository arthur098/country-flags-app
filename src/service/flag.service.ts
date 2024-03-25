import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  constructor(private http: HttpClient) {}

  findFlagsInformations(): Observable<any> {
    return this.http.get('assets/data.json');
  }
}

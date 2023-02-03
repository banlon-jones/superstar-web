import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    return this.http.get<any>('https://restcountries.com/v3.1/all');
  }
}

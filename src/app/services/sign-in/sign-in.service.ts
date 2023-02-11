import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LogInWithEmail, LogInWithPhone} from '../../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private https: HttpClient) { }

  loginWithEmailAndPassword(userCredentials: LogInWithEmail): Observable<any> {
    return this.https.post('https://api.superstars.co/api/auth/login', userCredentials);
  }

  loginWithPhoneAndPassword(userCredentials: LogInWithPhone): Observable<any> {
    return this.https.post('https://api.superstars.co/api/auth/login', userCredentials);
  }
}

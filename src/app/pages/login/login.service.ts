import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthType } from 'src/app/types/Auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // This module is used to simulate the auth module

  constructor() { }

  login(login: string, password: string): Observable<AuthType>{
    const authObject: AuthType = {
      auth: false
    }
    if(login === "movies@email.com" && password === "123456"){
      authObject.auth = true;
    }
    return of(authObject); 
  }
}

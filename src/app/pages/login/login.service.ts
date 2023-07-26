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
    if(login === "movies@email.com" && password === "123456"){
      return of({auth: true});
    }
    return of({ auth: false }); 
  }
}

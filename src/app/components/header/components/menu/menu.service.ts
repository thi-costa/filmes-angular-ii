import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _router: Router) { }

  redirectToRoot(){
    this._router.navigate(['/']);
  }
}

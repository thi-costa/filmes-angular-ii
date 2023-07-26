import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _router: Router) { }

  redirectNavPath(path: string){
    this._router.navigate([path]);
  }
}

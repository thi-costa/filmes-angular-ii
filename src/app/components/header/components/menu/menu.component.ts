import { Component } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private _service: MenuService){}

  redirectToRoot(){
    this._service.redirectToRoot();
  }

}

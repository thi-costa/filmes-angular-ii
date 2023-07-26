import { Component, Input } from '@angular/core';
import { MenuService } from './menu.service';
import { NavLinksTypes } from 'src/app/types/navLinks';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() navLinks: NavLinksTypes[];

  constructor(private _service: MenuService){};

  public redirectNavPath(path: string){
    this._service.redirectNavPath(path);
  };
}

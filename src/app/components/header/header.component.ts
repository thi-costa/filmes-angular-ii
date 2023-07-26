import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavLinksTypes } from 'src/app/types/navLinks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() navigationLinksFromApp: NavLinksTypes[] = [];
  @Output() navigationLinks = new EventEmitter<NavLinksTypes[]>();

  handleValueFromMenu(value: NavLinksTypes[]) {
    this.navigationLinks.emit(value);
  }
}

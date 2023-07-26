import { Component } from '@angular/core';
import { NavLinksTypes } from './types/navLinks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filmes-angular-ii';
  navLinks: NavLinksTypes[] = [
    {label: "Home", path: "/"},
    {label: "Favoritos", path: "/movies/favorite"},
    {label: "Sobre nós", path: "/about"},
    {label: "Login", path: "/login"}
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frLimberger';

  showMenu: boolean = false

  toggleMenu() {
    this.showMenu = !this.showMenu
  }
}

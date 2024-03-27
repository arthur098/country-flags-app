import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'cf-header',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleDarkMode() {
    const themeClass = 'dark-theme';
    const body = document.body;

    if(body.classList.contains(themeClass)) {
      body.classList.remove(themeClass);
    } else {
      body.classList.add(themeClass);
    }
  }
}

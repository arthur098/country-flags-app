import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'cf-header',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.toggleDarkMode();
    }
  }

  toggleDarkMode() {
    const themeClass = 'dark-theme';
    const body = document.body;

    if(body.classList.contains(themeClass)) {
      body.classList.remove(themeClass);
    } else {
      body.classList.add(themeClass);
    }
    this.toggleHeaderDarkTheme(themeClass);
  }

  private toggleHeaderDarkTheme(themeClass: string) {
    const header = document.querySelector('.header');
    if(header !== null) {
      if(header.classList.contains(themeClass)) {
        header.classList.remove(themeClass);
      } else {
        header.classList.add(themeClass);
      }
    }
  }
}

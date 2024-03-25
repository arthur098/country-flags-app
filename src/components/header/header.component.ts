import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'cf-header',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

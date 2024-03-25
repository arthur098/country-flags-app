import { Component, Input } from '@angular/core';
import { MatCard, MatCardContent, MatCardImage } from '@angular/material/card';
import { FlagInfoModel } from '../../model/FlagInfoModel';
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'cf-flag-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardImage,
    DecimalPipe
  ],
  templateUrl: './flag-card.component.html',
  styleUrl: './flag-card.component.scss'
})
export class FlagCardComponent {

  @Input()
  flag: FlagInfoModel|null = null;
}

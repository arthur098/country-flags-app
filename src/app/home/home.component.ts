import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import { FlagService } from '../../service/flag.service';
import { FlagInfoModel } from '../../model/FlagInfoModel';
import { NgFor } from '@angular/common';

@Component({
  selector: 'cf-home',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    MatCardContent,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(public flagService: FlagService) {}

  flags: FlagInfoModel[] = [];

  ngOnInit(): void {
    this.flagService.findFlagsInformations().subscribe((result: FlagInfoModel[]) => {
      this.flags = result;
    });
  }
}

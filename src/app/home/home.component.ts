import { Component, OnInit } from '@angular/core';
import { FlagService } from '../../service/flag.service';
import { FlagInfoModel } from '../../model/FlagInfoModel';
import { NgForOf } from '@angular/common';
import { MatFormField, MatLabel, MatPrefix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FlagCardComponent } from '../../components/flag-card/flag-card.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'cf-home',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatPrefix,
    NgForOf,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    FlagCardComponent,
    MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(public flagService: FlagService) {}

  flags: FlagInfoModel[] = [];
  flagList: FlagInfoModel[] = [];
  regions: Set<string> = new Set();
  form: FormGroup = new FormGroup<any>({
    country: new FormControl(''),
    region: new FormControl('')
  });

  ngOnInit(): void {
    this.flagService.findFlagsInformations().subscribe((result: FlagInfoModel[]) => {
      this.flags = result;
      this.flagList = result;

      let regions = this.flags.map(flag => flag.region);
      regions = regions.sort();
      this.regions = new Set(regions);
    });
  }

  filter():void {
    const country = this.form.value.country;
    const region = this.form.value.region;

    this.flags = this.flagList.filter(flag => flag.name.toUpperCase().includes(country.toUpperCase()) && (flag.region === region || !region));
  }
}

import { Component, OnInit } from '@angular/core';
import { FlagService } from '../../service/flag.service';
import { FlagInfoModel } from '../../model/FlagInfoModel';
import { DecimalPipe, NgForOf } from '@angular/common';
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
    MatButton,
    DecimalPipe
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
  selectedFlag: FlagInfoModel|null = null;

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

  selectFlag(flag: FlagInfoModel) {
    this.selectedFlag = flag;
    this.disableFlagCardSection();
  }

  back() {
    this.selectedFlag = null;
    this.disableDetailSection();
  }

  private disableFlagCardSection() {
    const flagCardMainSection = document.getElementById('flag-card-section');
    const detailSection = document.getElementById('detail-section');
    if(flagCardMainSection !== null) {
      flagCardMainSection.style.width = '0';
      flagCardMainSection.style.height = '0';
      flagCardMainSection.style.transform = 'scaleX(0)';
      if(detailSection !== null) {
        detailSection.style.width = '100%';
        detailSection.style.transform = 'scaleX(1)';
      }
    }
  }

  private disableDetailSection() {
    const flagCardMainSection = document.getElementById('flag-card-section');
    const detailSection = document.getElementById('detail-section');
    if(flagCardMainSection !== null) {
      flagCardMainSection.style.width = '100%';
      flagCardMainSection.style.height = '';
      flagCardMainSection.style.transform = '';
      if(detailSection !== null) {
        detailSection.style.width = '0';
        detailSection.style.transform = 'scaleX(0)';
      }
    }
  }
}

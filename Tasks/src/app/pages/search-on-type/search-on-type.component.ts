import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Filter, Universities } from './interfaces/interfaces';
import { UniversitiesService } from './services/universities.service';

@Component({
  selector: 'app-search-on-type',
  templateUrl: './search-on-type.component.html',
  styles: [],
})
export class SearchOnTypeComponent implements OnInit {
  filterOptions!: Filter[];
  filterValue!: Filter; // button value
  suggestedUniversities: Universities[] = [];

  constructor(
    private primeNGConfig: PrimeNGConfig,
    private universitiesService: UniversitiesService
  ) {
    this.filterOptions = [
      { name: 'Spain', alpha2Code: 'ES' },
      { name: 'United Kingdom', alpha2Code: 'GB' },
      { name: 'Portugal', alpha2Code: 'PT' },
    ];
  }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }

  updateInputValue(inputValue: string) {
    if (inputValue !== '') {
      // request
      this.universitiesService
        .searchUniversities(this.filterValue.alpha2Code, inputValue)
        .subscribe((universities) => {
          // console.log(universities);

          this.suggestedUniversities = universities;
        });
    }
  }

  setButtonValue(filterObject: Filter) {
    // actualizar el valor local del boton pulsado
    this.filterValue = filterObject;
  }
}

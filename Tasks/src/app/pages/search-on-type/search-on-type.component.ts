import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { filter } from 'rxjs';
import { Filter, Universities } from './interfaces/interfaces';
import { UniversitiesService } from './services/universities.service';

@Component({
  selector: 'app-search-on-type',
  templateUrl: './search-on-type.component.html',
  styles: [
  ]
})
export class SearchOnTypeComponent implements OnInit {

  filterOptions!        : Filter[];
  filterValue!          : Filter; // button value
  inputValue!           : string;
  suggestedUniversities : Universities[] = [];

  constructor(
    private primeNGConfig       : PrimeNGConfig,
    private universitiesService : UniversitiesService
  ) { 
    this.filterOptions = [
      {name: "Spain"          , alpha2Code: 'SP'},
      {name: "United Kingdom" , alpha2Code: 'GB'},
      {name: "Portugal"       , alpha2Code: 'PT'}
    ];
   }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }

  updateInputValue(event: string) {
    // con el valor transmitido y el valor del boton almacenadohago la peticion
    // console.log(this.filterValue.alpha2Code);
    // console.log(event);
    
    if(event !== '' || event === undefined){
      // request
      this.universitiesService
          .searchUniversities( this.filterValue.alpha2Code, event )
          .subscribe( universities => {
            this.suggestedUniversities = universities;
          })
    }
    
    
  }

  setButtonValue(filterObject:  Filter){
    // actualizar el valor local del boton pulsado
    this.filterValue = filterObject;




    

    
  }

}

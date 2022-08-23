import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Filter } from '../../interfaces/interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})

export class InputComponent implements OnInit {

  filterOptions!  : Filter[];
  filterValue!    : Filter;
  inputValue!     : string;
  needInput       : boolean = false;

  constructor( private primeNGConfig: PrimeNGConfig ) { 
    this.filterOptions = [
      {name: "Spain" , },
      {name: "United Kingdom"},
      {name: "Portugal"}
    ];
   }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
    
  }

  setFilter() {

    // check for input error
    if( this.inputValue ){
      console.log(`Choosen filter: ${this.filterValue.name}.\nChoosen country: ${this.inputValue}`)
    }else{
      // error case
      this.needInput = true;
    }
    
    // request
  }

}

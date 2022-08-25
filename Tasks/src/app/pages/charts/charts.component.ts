import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styles: [
  ]
})
export class ChartsComponent implements OnInit {

  lienarSelector: boolean = false;
  doubleSelector: boolean = false;
  doughnutSelector: boolean = false;

  constructor( private primeNGConfig: PrimeNGConfig ) { }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }

  changeStatus(selector: string) {
    switch(selector){
      case 'lienarSelector':
        this.lienarSelector = !this.lienarSelector;
        break;
      case 'doubleSelector':
        this.doubleSelector = !this.doubleSelector;
        break;
      case 'doughnutSelector':
        this.doughnutSelector = !this.doughnutSelector;
        break;
    }
  }

}

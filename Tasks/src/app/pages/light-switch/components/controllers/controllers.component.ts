import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { trafficLightColors } from '../../interfaces/interfaces';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styles: [
  ]
})
export class ControllersComponent implements OnInit {

  // Send on/off signal to the traffic-light
  @Output() colorSwitch: EventEmitter<string>   = new EventEmitter();

  trafficLightColors: trafficLightColors[] = [
    { name: 'Red'   , value: 1 },
    { name: 'Ambar' , value: 2 },
    { name: 'Green' , value: 3 }
  ];

  selectedColor!: trafficLightColors;
  checked       : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglePower() {
    this.checked = !this.checked;
  }

  emitColor() {
    if(this.checked){
      // on ->emit color
      this.colorSwitch.emit( this.selectedColor.name );
    }
  }

}

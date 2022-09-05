import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { trafficLightColors, payloadLight } from '../../interfaces/interfaces';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styles: [
  ]
})
export class ControllersComponent implements OnInit {

  // Send on/off signal to the traffic-light
  @Output() colorSwitch: EventEmitter<payloadLight>   = new EventEmitter();

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

  togglePower(): void {
    this.checked = !this.checked;
  }

  emitColor(): void {
    const payload: payloadLight = [ this.selectedColor.name, this.checked ];
    this.colorSwitch.emit( payload );
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trafficLightColors, payloadLight } from '../../interfaces/interfaces';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styles: [],
})
export class ControllersComponent implements OnInit {

  // Send on/off signal to the traffic-light
  // @Output() emitter: EventEmitter<any> = new EventEmitter();

  // trafficLightColors: trafficLightColors[] = [
  //   { name: 'Red', value: 1 },
  //   { name: 'Ambar', value: 2 },
  //   { name: 'Green', value: 3 },
  // ];

  // selectedColor!: trafficLightColors;
  // checked: boolean = false;

  myForm: FormGroup = this.fb.group({
    selected: ['1'],// default red,
    power   : [false]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.colorSelector();
    // console.log(this.selectedColor);
    // this.emitter.emit(this.myForm.value)
  }

  // togglePower() {
  //   this.checked = !this.checked;
  // }

  // colorSelector(){
  //   this.emitter.emit([this.checked, this.selectedColor.name]);
  // }


}

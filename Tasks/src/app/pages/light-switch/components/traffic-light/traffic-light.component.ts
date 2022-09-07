import { Component, Input, OnInit } from '@angular/core';
import { payloadLight } from '../../interfaces/interfaces';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styles: [
    `
      .panel {
        background-color: black;
        width: 200px;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 10px 5px;
        border-radius: 10px;
      }

      .traffic-light {
        margin:10px 0 10px 0;
        background-color: grey;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
    `,
  ],
})
export class TrafficLightComponent implements OnInit {
  // colorOption: string = '';
  // isChecked: boolean = false;

  @Input() formOptions: any;

  constructor() {}

  ngOnInit(): void {
  }

  // getColor(event: any): void {
  //   // console.log(event);
    
  //   // this.isChecked = event[1];

  //   // if (!this.isChecked) {
  //   //   this.colorOption = 'gray';
  //   // } else {
  //   //   this.colorOption = event[0];
  //   // }
  // }
}

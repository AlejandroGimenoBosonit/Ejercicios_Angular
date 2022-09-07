import { Component, OnInit } from '@angular/core';
import { payloadLight } from '../../interfaces/interfaces';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styles: [
    `
      .panel {
        background-color: black;
        width: 50px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 10px 5px;
        border-radius: 10px;
      }

      .traffic-light {
        background-color: grey;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
    `,
  ],
})
export class TrafficLightComponent implements OnInit {
  colorOption: string = '';
  isChecked: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getColor(event: payloadLight): void {
    this.isChecked = event[1];

    if (!this.isChecked) {
      this.colorOption = 'gray';
    } else {
      this.colorOption = event[0];
    }
  }
}

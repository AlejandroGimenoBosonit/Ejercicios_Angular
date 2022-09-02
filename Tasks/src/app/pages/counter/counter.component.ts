import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { interval, Observable, of, takeUntil, timer, Subject, count, scan } from 'rxjs';
import { Counter } from './interface/interfaces';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent implements OnInit {

  stopSignal  = new Subject<boolean>();
  // default counter data
  counterData: Counter = {
    "count"   :true,
    "countUp" :true,
    "value"   :0, // not edit
    "speed"   :1000,
    "step"    :1
  };
  // Rxjs timer as counter
  counter     = timer(0, this.counterData.speed);
  
  counterValue! : number;
  setTo!        : number;

  constructor() { }

  ngOnInit(): void {
    this.counterValue = this.counterData.value;
    this.getDataToSet();
  }

  getButtonsSignal( event: string ): void {
    switch(event){
      case 'start':

        this.counter.pipe(
          takeUntil( this.stopSignal ),
          scan( acc => this.accurateOperation(acc) )
        ).subscribe(counterValue => {
          this.counterValue = counterValue;
        });
        break;

      case 'pause':
        // pause counter
        this.stopSignal.next( true );
        break;

      case 'reset':
        this.stopSignal.next( true );
        this.counterValue = 0;
        break;

      case 'cUp':
        // change counUp to true
        this.counterData.countUp = true; 
        break;

      case 'cDown':
        // change counUp to false
        this.counterData.countUp = false;
        break;
    }
  }

  getDataToSet(): void {
    this.setTo = this.counterData.value
  }

  accurateOperation(accurate: number): number {
    // check for count down or up
    if(this.counterData.countUp){
      return accurate+this.counterData.step;
    }else{
      return accurate-this.counterData.step;
    }
  }

  getInputSignal(number: any): void {
    console.log(number);
    this.counterData.step = number;
  }
}
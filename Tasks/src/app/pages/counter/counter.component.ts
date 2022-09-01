import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { interval, Observable, of, takeUntil, timer, Subject, count } from 'rxjs';
import { Counter } from './interface/interfaces';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent implements OnInit {

  // Rxjs inetrval as counter
  // Emits incremental numbers periodically in time. (1s = 1000 ms)
  counter = interval(1000);

  counterValue!: number;
  setTo!: number;

  // default counter data
  counterData: Counter = {
    "count"   :true,
    "countUp" :false,
    "value"   :0, // not edit
    "speed"   :1000,
    "step"    :1
  };

  stopSignal = new Subject<boolean>();

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.counterValue = this.counterData.value;

    this.getDataToSet();
    
  }

  getButtonsSignal( event: string ): void {
    switch(event){
      case 'start':
        // start counter
        // subscribe to the observable
        this.counter
            .pipe( 
              takeUntil(
                this.stopSignal
              )
            )
            .subscribe( response => {
              // console.log(response);
              this.counterValue = response;
            } );
        break;
      case 'pause':
        // pause counter

        this.stopSignal.next( !this.counterData.count );

        break;
      case 'reset':

        
        this.stopSignal.next( true);

        // reset counterValue = 0
        this.counterValue = 0;
        break;
    }
  }

  getDataToSet() {
    this.setTo = this.counterData.value
  }

}
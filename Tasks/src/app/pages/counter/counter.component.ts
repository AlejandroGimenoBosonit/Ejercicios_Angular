import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent implements OnInit {

  timerSubscription!: Subscription;


  seconds : number = 0;
  count   : boolean = false;
  countUp : boolean = true;
  value   : number  = 0;
  speed   : number  = 1000;
  step    : number  = 1;

  constructor() { }

  ngOnInit(): void {
    // this.timerSubscription = interval(1000).subscribe( i => this.seconds=i )
    
  }

  start(){
    this.count = true;
    if(this.count){
      this.timerSubscription = interval(1000).subscribe( i => this.seconds=i )
    }
  }
  reset(){
    this.count = false;
    this.seconds = 0;
  }
  pause(){
    this.count = false;
    this.seconds = 0;
    this.timerSubscription.unsubscribe();
  }
}
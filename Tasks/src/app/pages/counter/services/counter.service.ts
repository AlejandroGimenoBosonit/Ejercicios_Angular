import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counterValue!: number;

  get ModifyCounterValue(): number {
    return this.counterValue;
  }

  constructor() { }

  
}

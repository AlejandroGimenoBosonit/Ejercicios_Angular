import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [],
})
export class InputComponent implements OnInit {
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  name: string = '';
  debouncer: Subject<string> = new Subject(); // observable to deal with onDebounce
  isAlive$: Subject<boolean> = new Subject();

  constructor() {}

  ngOnInit(): void {
    //Don't emit the debounce until there are passed 300ms
    this.debouncer.pipe(

      debounceTime(300),
      takeUntil( this.isAlive$ )
      
      ).subscribe((value) => {
      this.onDebounce.emit(value);
      console.log(value);
      
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.isAlive$.next(true);
    this.isAlive$.complete();
  }

  pressKey() {
    this.debouncer.next(this.name);
  }
}

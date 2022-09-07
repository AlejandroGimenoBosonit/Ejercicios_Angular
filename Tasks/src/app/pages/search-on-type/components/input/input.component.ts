import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [],
})
export class InputComponent implements OnInit {
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  name: string = '';
  debouncer: Subject<string> = new Subject(); // observable to deal with onDebounce

  constructor() {}

  ngOnInit(): void {
    //Don't emit the debounce until there are passed 300ms
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  pressKey() {
    this.debouncer.next(this.name);
  }
}

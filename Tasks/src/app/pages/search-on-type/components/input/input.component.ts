import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { debounceTime, Subject } from 'rxjs';
import { Filter, Universities } from '../../interfaces/interfaces';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})

export class InputComponent implements OnInit {
  
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  needInput!          : boolean; // default false = 'invalid'
  name                : string = '';
  debouncer           : Subject<string> = new Subject(); // special observable to deal with onDebounce

  constructor() {  }

  ngOnInit(): void {

    //Don't emit the debounce until there are passed 300ms
    this.debouncer
        .pipe( debounceTime( 300 ) )
        .subscribe( value => {
          this.needInput = !this.needInput;
          this.onDebounce.emit( value );
          console.log(value);
          
        })
  }

  pressKey() {
    this.debouncer.next( this.name );
  }
  

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  // outputs
  @Output() signal: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // methods
  toggleSignal( label: string ): void {
    // emit signal to the parent component
    this.signal.emit( label );
  }
}

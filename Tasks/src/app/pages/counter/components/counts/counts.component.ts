import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styles: [`
    .flex-column {
      width: 300px;
    }
  `]
})
export class CountsComponent implements OnInit {

  // View input value by ViewChild and loca reference
  @ViewChild('myForm') myForm!: ElementRef;

  @Output() step: EventEmitter<number> = new EventEmitter<number>();
  @Input() setTo!: number;

  constructor() { }

  ngOnInit(): void {}

  getInputSignal(): void {
    // console.log(this.myForm.nativeElement['valueAsNumber']);
    this.step.emit( this.myForm.nativeElement['valueAsNumber'] )
  }
}

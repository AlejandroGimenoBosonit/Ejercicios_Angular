import { Component, Input, OnInit } from '@angular/core';

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

  @Input() setTo!: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.setTo);
    
  }

}

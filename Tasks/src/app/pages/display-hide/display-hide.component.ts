import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styles: [
  ]
})
export class DisplayHideComponent implements OnInit {
  

  hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleImage(): void { this.hide = !this.hide }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styles: [],
})
export class DisplayHideComponent {
  hide: boolean = false;

  constructor() {}

  toggleImage() {
    this.hide = !this.hide;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { formControls } from './interfaces/interfaces';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styles: [
  ]
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

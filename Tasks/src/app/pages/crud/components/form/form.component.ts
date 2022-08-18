import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  // countries
  countries   : string[] = [];
  selectedCity: string   = '';

  // form Group
  myForm: FormGroup = this.fb.group({
    username    : [ '',     [Validators.required] ],
    email       : [ '',     [Validators.required] ],
    password1   : [ '',     [Validators.required] ],
    password2   : [ '',     [Validators.required] ],
    subscribed  : [ false,  [Validators.required] ],
    country     : [ '',     [Validators.required] ],
    countryCity : [ '',     [Validators.required] ],
  },
  // {
  //   validators  : []
  // }
  );

  
  constructor(
    private fb: FormBuilder, // reactive form injection
    // validation service
    // email validation service
  ) { }

  ngOnInit(): void {
  }

  submitForm() {

  }

}

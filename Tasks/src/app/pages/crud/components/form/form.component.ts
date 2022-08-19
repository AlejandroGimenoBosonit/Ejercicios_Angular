import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormResult } from '../../interfaces/interfaces';
import { CountriesService } from '../../services/services.service';
import { ValidatorsService } from '../../services/validators.service';
import { EmailValidatorService } from '../../services/email-validator.service';

type empty = {};


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
    username    : [ '',     [Validators.required, this.validations.cannotBeStrider ]],
    email       : [ '',     [Validators.required, Validators.pattern( this.validations.emailInputPattern)], [this.emailValidator.validate]],
    password1   : [ '',     [Validators.required, Validators.minLength(6)] ],
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
    private countriesService  : CountriesService,     //service to get countries
    private fb                : FormBuilder,          // reactive form injection
    private validations       : ValidatorsService,    // validation service
    private emailValidator    : EmailValidatorService // email validation service
  ) { }

  ngOnInit(): void {
    this.countriesService
        .searchCountries()
        .subscribe( (countries) => {
          // Need new array of countrie's names
          this.countries = countries.map( country =>  country.name.common).sort();
        })
  }

  submitForm() {
    // const formInfo = Object.keys(this.myForm.controls).reduce((acc, key)=>{
    //   console.log(acc);
      
    //   acc[key] = this.myForm.controls[key].value;
    //   return acc;
    // } ,{});


    
  }

}

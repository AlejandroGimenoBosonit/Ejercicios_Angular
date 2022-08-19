import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { ValidatorsService } from '../../services/validators.service';
import { UsersService } from '../../services/users.service';
import { formControls } from '../../interfaces/interfaces';


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
    email       : [ '',     [Validators.required]], //, Validators.pattern( this.validations.emailInputPattern)], [this.usersService.validate]],
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
    private usersService      : UsersService          // email validation service
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

    const payload: formControls = {
      username    : this.myForm.controls['username'].value,
      email       : this.myForm.controls['email'].value,
      password1   : this.myForm.controls['password1'].value,
      subscribed  : this.myForm.controls['subscribed'].value,
      country     : this.myForm.controls['country'].value,
      countryCity : this.myForm.controls['countryCity'].value
    }
   
    
    this.usersService
        .postUser( payload )
        .subscribe( data => console.log('User added successfully'));

    
  }

}

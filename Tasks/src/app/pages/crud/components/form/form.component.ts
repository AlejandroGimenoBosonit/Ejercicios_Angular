import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { ValidatorsService } from '../../services/validators.service';
import { UsersService } from '../../services/users.service';
import { formControls } from '../../interfaces/interfaces';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`
    p-card {
      width: 450px;
    }
  `]
})
export class FormComponent implements OnInit {

  editMode      : boolean = false;
  identifier!   : number;
  userFromTable!: formControls;
  // countries
  countries     : string[] = [];
  selectedCity  : string   = '';

  // form Group
  myForm: FormGroup = this.fb.group({
    username    : [ '',     [Validators.required]],
    email       : [ '',     [Validators.required, Validators.pattern( this.validations.emailInputPattern)], [this.usersService]],
    password1   : [ '',     [Validators.required, Validators.minLength(6)] ],
    password2   : [ '',     [Validators.required] ],
    subscribed  : [ false,  [Validators.required] ],
    country     : [ '',     [Validators.required] ],
    countryCity : [ '',     [Validators.required] ],
  },
  {
    validators  : [this.validations.passMatches( 'password1', 'password2' )]
  }
  );

  
  constructor(
    private countriesService  : CountriesService,     //service to get countries
    private fb                : FormBuilder,          // reactive form injection
    private validations       : ValidatorsService,    // validation service
    private usersService      : UsersService          // email validation service
  ) { }

  ngOnInit(): void {
    // subscribe to countrie's request
    this.countriesService
        .searchCountries()
        .subscribe( (countries) => {
          // Need new array of countrie's names
          this.countries = countries.map( country =>  country.name.common).sort();
        })
    // subscribe to table observable
    this.usersService
        .getContentToForm()
        .subscribe( userToEdit => {

          this.editMode = true;

          const {id} = userToEdit;
          this.identifier = id!;

          const { username, email, password1, subscribed, country, countryCity } = userToEdit;

          // console.log(this.myForm.controls);
          
          this.myForm= this.fb.group({
            username    : [ username,     [Validators.required]],
            email       : [ email,     [Validators.required, Validators.pattern( this.validations.emailInputPattern)]],
            password1   : [ password1,     [Validators.required, Validators.minLength(6)] ],
            password2   : [ password1,     [Validators.required] ],
            subscribed  : [ subscribed,  [Validators.required] ],
            country     : [ country,     [Validators.required] ],
            countryCity : [ countryCity,     [Validators.required] ],
          },
          {
            validators  : [this.validations.passMatches( 'password1', 'password2' )]
          }
          );
          
        })
  }

  get emailErrorMssg(): string {
    const error = this.myForm.get('email')?.errors;

    if(error?.['required']){
      return 'Email is required';
    }else if(error?.['pattern']) {
      return 'Email format invalid';
    }else if(error?.['usedEmail']){
      return 'Email is in use';
    }

    return '';
  }

   // conditional way to  display error messages
  validField( field: string ): boolean | undefined {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }


  submitForm(): void {

    const payload: formControls = {
      username    : this.myForm.controls['username'].value,
      email       : this.myForm.controls['email'].value,
      password1   : this.myForm.controls['password1'].value,
      subscribed  : this.myForm.controls['subscribed'].value,
      country     : this.myForm.controls['country'].value,
      countryCity : this.myForm.controls['countryCity'].value
    }


    if(this.editMode){
      // edit mode
      
      this.usersService
          .updateUser( payload, this.identifier )
          .subscribe( (userToEdit) => {
            console.log(userToEdit);
            this.usersService.fromFormToTable(userToEdit);
            // mark all fields as touched
            this.myForm.markAsTouched();
            console.log('llega');
          })

    }else{
      // add mode
      this.usersService
          .postUser( payload )
          .subscribe( (userForm)=> {
            // console.log(data);


            
            // calling a service method to subscribe to any changes
            this.usersService.fromFormToTable(userForm);



            // mark all fields as touched
            this.myForm.markAsTouched();
            console.log('llega');
            
          });
    }
    this.myForm.reset();
    
  }
}

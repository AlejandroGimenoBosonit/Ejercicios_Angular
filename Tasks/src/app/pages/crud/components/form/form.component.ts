import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { formControls, PersonalForm } from '../../interfaces/interfaces';
import { CountriesService } from '../../services/countries.service';
import { UsersService } from '../../services/users.service';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`
    p-card {
      width: 450px;
    }
    .table-component {
      width: 100%;
    }
  `]
})
export class FormComponent implements OnInit {

  editMode      : boolean   = false;
  countries     : string[]  = [];
  selectedCity  : string    = '';
  identifier!   : number;
  userFromTable!: formControls;
  users!        : formControls[];

  
  myForm: FormGroup = this.fb.group(
    {
      username    : [ '',     [Validators.required] ],
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
    private countriesService  : CountriesService,     // service to get countries
    private fb                : FormBuilder,          // reactive form injection
    private validations       : ValidatorsService,    // validation service
    private usersService      : UsersService          // email validation service
  ) {
    
    
   }

  ngOnInit(): void {
    // get users
    this.getUsers();

    // subscribe to countrie's request
    this.countriesService
        .searchCountries()
        .subscribe( (countries) => {
          // Need new array of countrie's names
          this.countries = countries.map( country =>  country.name.common).sort();
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


  submitForm() {
    // requests
    if( this.editMode ){
      // edit
      this.usersService
          .updateUser(this.myForm.value)
          .subscribe(
          {
            next:   () => {
              console.log("User updated successdully");
              // update table's content
              this.getUsers();
              // reset form
              this.myForm.reset();
              // turn default mode - add mode
              this.editMode = false;
            },
            error:  error => {
              console.error(error.message);
              // reset form
              this.myForm.reset();
            }
          })
    }else{
      // add mode
      this.usersService
          .postUser( this.myForm.value )
          .subscribe({
            next:   () => {
              console.log("User posted successdully");
              this.getUsers();
              this.myForm.reset();
            },
            error:  error => {
              console.error(error);
              this.myForm.reset();
            }
          })
    }
  }

  getUsers() {
    this.usersService
        .getUsers()
        .subscribe( users => {
          this.users = users;
        });
  }

  operateAction(event: formControls | number) {

    if(typeof(event) === 'number'){
      // delete mode
      this.usersService
          .deleteUserById( event )
          .subscribe({
            next:   () => {
              console.log("User updated successdully");
              this.getUsers();
              this.myForm.reset();
            },
            error:  error => {
              console.error(error);
              this.myForm.reset();
            }
          })
    }else{
      // edit mode
      const { username, email, password1, subscribed, country, countryCity, id } = event;
      // load info into form
      this.myForm = this.fb.group(
        {
          username    : [ username,   [Validators.required]],
          email       : [ email,      [Validators.required, Validators.pattern( this.validations.emailInputPattern)]],
          password1   : [ password1,  [Validators.required, Validators.minLength(6)] ],
          password2   : [ password1,  [Validators.required] ],
          subscribed  : [ subscribed, [Validators.required] ],
          country     : [ country,    [Validators.required] ],
          countryCity : [ countryCity,[Validators.required] ],
          id          : [ id ]
        },
        {
          validators  : [this.validations.passMatches( 'password1', 'password2' )]
        }
      );

      // update mode
      this.editMode = true;
    }    
  }



}

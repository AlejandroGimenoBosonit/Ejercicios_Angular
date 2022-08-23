import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  // RegEx patterns to validate name and email
  // ()-> name space () -> last_name
  // [a-zA-Z]+ ==> [every character from a to z and A to Z]additional_characters
  // nameInputPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  /*
  email -> " first_part@second_part.com "
  1-> "^"-> matches the beginning of the line
  2-> "$"-> matches the end of the line

  3-> "^[]+@[]+\\.[]{2,4}$"
      {2,4} -> The previous part can repeat itslef from 2 to 4 times
                This is because to write web dominions like "com", "org", "eu", etc

  4-> [a-z0-9._%+-]
    a-z -> Matches a character in the range "a" to "z" (char code 97 to 122)
    a-z -> Matches a character in the range "0" to "9" (char code 48 to 57)
    .   -> Matches a '.' character (char code 46)
    _   -> Matches a '_' character (char code 95)
    %   -> Matches a '%' character (char code 37)
    +   -> Matches a '+' character (char code 43)
    -   -> Matches a '-' character (char code 45)
  5-> \\. -> Matches a '.'
  */
  emailInputPattern : string = '^[a-zA-Z0-9._%+-]+@[a-z0-9._]+\\.[a-z]{2,4}$';


  constructor() { }

  // custom validations
  cannotBeStrider( control: FormControl ): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();

    if( value === 'strider' ) {
      return {noStrider: true} // error case
    }
    return null; //if validation is success
  }

  // password validator
  passMatches( passField1: string, passField2: string ) {
    return ( formGroup: AbstractControl ) => {
      const pass1 = formGroup.get(passField1)?.value;
      const pass2 = formGroup.get(passField2)?.value;

      if( pass1 !== pass2 ){
        // console.log(pass1, pass2);
        
        //set error as not equals
        formGroup.get(passField2)?.setErrors({notEquals: true});
        return {notEquals: true};
      }
      //set error as null if success
      formGroup.get(passField2)?.setErrors(null);
      return null;
    }
  }
}

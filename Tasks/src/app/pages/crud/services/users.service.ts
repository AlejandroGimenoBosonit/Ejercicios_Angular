import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, map, catchError } from 'rxjs';
import { formControls } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _jsonServer : string = "http://localhost:3000"; //TODO: environment

  constructor( private http: HttpClient ) { }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    
    const email: string = control.value;
    // console.log(email);
    
    // make a request to json-server to check emails
    return this
          .http
          .get<any[]>(` http://localhost:3000/users?q=${email}`)
          .pipe(
            // delay only for undertand form's state
            // delay(3000),
            map( res => {
              return ( res.length === 0 ) ? null : { usedEmail: true }
            })
          );
  }

  postUser( payload:  formControls): Observable<formControls> {
    // console.log(payload);
    
    const urlQuery: string = `${this._jsonServer}/users`;
    return this.http.post<formControls>( urlQuery, payload );
  }

  getUsers(): Observable<formControls[]> {
    return this.http.get<formControls[]>(`${this._jsonServer}/users` );
  }
}

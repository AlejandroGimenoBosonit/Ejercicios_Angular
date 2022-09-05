import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, map, Subject } from 'rxjs';
import { formControls } from '../interfaces/interfaces';
import { ThisReceiver } from '@angular/compiler';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements AsyncValidator {


  private _users!         : formControls[];
  private _users$         : Subject<formControls[]>;

  private _toTable!       : formControls;
  private _toTable$       : Subject<formControls>;

  private _tableContent!  : formControls;
  private _tableContent$  : Subject<formControls>;

  private _jsonServer : string = environment.jsonServerEndPoint;

  constructor( private http: HttpClient ) { 
    this._tableContent$ = new Subject();
    this._toTable$      = new Subject();
    this._users$        = new Subject(); 
   }

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    
    const email: string = control.value;
    // console.log(email);
    
    // make a request to json-server to check emails
    return this
          .http
          .get<formControls[]>(` ${this._jsonServer}/users?q=${email}`)
          .pipe(
            // delay only for undertand form's state
            // delay(3000),
            map( res => {
              return ( res.length === 0 ) ? null : { usedEmail: true }
            })
          );
  }
   

  fromDeleteToTable(users: formControls[], id: number): void {

    this._users = users.splice(
        users.indexOf(
          users.find(
            (element)=>element.id===id
          )!
        )
      );

    this._users$.next(this._users);
  }
  getUsersToTable():Observable<formControls[]> {
    return this._users$.asObservable();
  }

  
  // observable to render a new user in the table
  fromFormToTable(user: formControls): void{
    this._toTable = user;
    this._toTable$.next(this._toTable);
  } 
  getFormUser(): Observable<formControls>{
    return this._toTable$.asObservable();
  }
  

  
  // observable to pass user data from table to form
  fromTableToForm(user: formControls): void {
    this._tableContent = user;
    this._tableContent$.next( this._tableContent );
  }
  getContentToForm(): Observable<formControls> {
    return this._tableContent$.asObservable();
  }


  // http requests

  postUser( payload:  formControls): Observable<formControls> {
    // console.log(payload);
    
    const urlQuery: string = `${this._jsonServer}/users`;
    return this.http.post<formControls>( urlQuery, payload );
  }

  getUsers(): Observable<formControls[]> {
    return this.http.get<formControls[]>(`${this._jsonServer}/users` );
  }

  updateUser( payload: formControls, id: number ): Observable<formControls>{
    // console.log(payload);
    
    const urlQuery: string = `${this._jsonServer}/users/${id}`;
    return this.http.put<formControls>(urlQuery, payload);
  }

  deleteUserById(id: number) {
    return this.http.delete(`${this._jsonServer}/users/${id}`);
  }
}
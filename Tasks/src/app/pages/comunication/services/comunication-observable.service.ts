import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationObservableService {

  // variable as observable
  private _parentMessage  !: string;
  private _childMessage   !: string;

  // subject observer to me multicasted to manu observers
  // It will emit a string
  private _parentMessage$: Subject<string>;
  private _childMessage$: Subject<string>;


  constructor() { 
    
    this._parentMessage   = '';
    this._parentMessage$  = new Subject();

    this._childMessage   = '';
    this._childMessage$  = new Subject(); 
  }

  // methods
  fromParentToChild(message: string) {
    //update local value
    this._parentMessage =  message;
    
    // notify every observer that it's subscribed that there is a change
    this._parentMessage$.next( this._parentMessage );
  }

  // We want to subscribe to our observer but they are private, so we need a get
  getParentMessage$(): Observable<string>{
    // conver into obsrvable
    return this._parentMessage$.asObservable();
  }










  fromChildToParent(message: string) {
    //update local value
    this._childMessage =  message;
    // notify every observer that it's subscribed that there is a change
    this._childMessage$.next( this._childMessage );
  }

  // We want to subscribe to our observer but they are private, so we need a get
  getChildMessage$(): Observable<string>{
    // conver into obsrvable
    return this._childMessage$.asObservable();
  }
}

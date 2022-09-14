import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription, takeUntil, Subject } from 'rxjs';
import { ComunicationService } from 'src/app/pages/comunication/services/comunication.service';
import { ComunicationObservableService } from '../services/comunication-observable.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
})
export class ChildComponent implements OnInit, OnDestroy {
  // Output decorator to send data to the parent component
  @Output() mssgFromChild: EventEmitter<string> = new EventEmitter<string>();

  // Recieve any data from parent component
  @Input() mssgFromParent!: String;

  // variable used to send info to the parent component by Input
  // childMssg: string = '';

  // Child Messages
  childMssgSrvc: string = 'CHILD USING SERVICE';
  childMssgOutput: string = 'CHILD USING OUTPUT';
  childMssgObsrv: string = 'CHILD USING OBSERVABLE';

  subscription!: Subscription;

  alive$ = new Subject<boolean>();

  constructor(
    // simple service
    private comunicationService: ComunicationService,
    // observable
    private comunicationObservableService: ComunicationObservableService
  ) {}

  ngOnInit(): void {
    this.comunicationService.childComp = this;


    // subscribe to the observable
    this.comunicationObservableService.getParentMessage$()
     .pipe(
      takeUntil( this.alive$ )
     )
     .subscribe((mssg) => {
      this.mssgFromParent = mssg;
      console.log(mssg);
      
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // forma 1
    // this.subscription.unsubscribe();
    // form 2 (subject)
    this.alive$.next(true);
    this.alive$.complete();
  }

  // methods
  ///////////////////////////////////////////////////////////////////////////////////////////////
  useService() {
    /*
    Setting o the parent's component childMssg varibale a new value
    This is possible because there are two variables with a Parent and Child Component type and 
    every component links their properties with them in the inInit
    */
    this.comunicationService.parentComp.childMssg = this.childMssgSrvc;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  useInput() {
    // In this case we want to send data to de parent component, that's because
    // we need a @Output
    this.mssgFromChild.emit(this.childMssgOutput);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  useObservable() {
    // call observable method
    this.comunicationObservableService.fromChildToParent(this.childMssgObsrv);
  }
}

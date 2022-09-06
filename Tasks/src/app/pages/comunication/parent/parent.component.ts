import { Component, Input, OnInit } from '@angular/core';
import { ComunicationObservableService } from 'src/app/pages/comunication/services/comunication-observable.service';
import { ComunicationService } from 'src/app/pages/comunication/services/comunication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  providers: [ComunicationService],
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  // Sent this variable by input decorator in child's component
  // Create a new data every time that we sent the message
  parentMssg!: String;

  // variable used to send info to the child component by Input
  childMssg: string = '';

  // Parent Messages
  parentMssgSrvc  : string = 'PARENT USING SERVICE';
  parentMssgInput : string = 'PARENT USING INPUT';
  parentMssgObsrv : string = 'PARENT USING OBSERVABLE';

  // service injection
  constructor( 
      // simple service
      private comunicationService: ComunicationService,
      // observable
      private  comunicationObservableService: ComunicationObservableService
    ) { }

  ngOnInit(): void {
    this.comunicationService.parentComp = this;
    // subscribe to the observable
    this.comunicationObservableService
        .getChildMessage$()
        .subscribe( (mssg: string) => {
          this.childMssg = mssg;
        })
  }

  // methods

   ///////////////////////////////////////////////////////////////////////////////////////////////
  // Using a service
  useService(): void {
    /*
    Setting o the child's component childMssg varibale a new value
    This is possible because there are two variables with a Parent and Child Component type and 
    every component links their properties with them in the inInit
    */
    // this.comunicationService.childComp.mssgFromParent = this.parentMssgSrvc;
    console.log( this.comunicationService.childComp );
    
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  useInput(): void {
    // Update mssgFromChild with the message that we want to send to the child component
    this.parentMssg = new String(this.parentMssgInput);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  useObservable(): void {
    // call observable method
    this.comunicationObservableService.fromParentToChild( this.parentMssgObsrv );
  }








  

  // To get the child's information sent by Output we need a method
  // This method is passed by the parent html template as a indicator
  //"(mssgFromChild)="getMssgFromChild($event)"
  getMssgFromChild( event: string ){    
    this.childMssg = event;
  }
}


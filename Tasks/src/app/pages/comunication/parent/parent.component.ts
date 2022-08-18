import { Component, Input, OnInit } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  // Sent this variable by input decorator in child's component
  parentMssg: string = '';
 
  // variable used to send info to the child component by Input
  childMssg: string = '';

  // Parent Messages
  parentMssgSrvc  : string = 'PARENT USING SERVICE';
  parentMssgInput : string = 'PARENT USING INPUT';
  parentMssgObsrv : string = 'PARENT USING OBSERVABLE';

  // service injection
  constructor( private comunicationService: ComunicationService ) { }

  ngOnInit(): void {
    this.comunicationService.parentComp = this;
  }

  // methods

   ///////////////////////////////////////////////////////////////////////////////////////////////
  // Using a service
  useService() {
    /*
    Setting o the child's component childMssg varibale a new value
    This is possible because there are two variables with a Parent and Child Component type and 
    every component links their properties with them in the inInit
    */
    this.comunicationService.childComp.mssgFromParent = this.parentMssgSrvc;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  useInput() {
    // Update mssgFromChild with the message that we want to send to the child component
    this.parentMssg = this.parentMssgInput;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  useObservable() {

  }








  

  // To get the child's information sent by Output we need a method
  // This method is passed by the parent html template as a indicator
  //"(mssgFromChild)="getMssgFromChild($event)"
  getMssgFromChild( event: string ){    
    this.childMssg = event;
  }
}


import { Injectable } from '@angular/core';
import { ParentComponent } from '../pages/comunication/parent/parent.component';
import { ChildComponent } from '../pages/comunication/child/child.component';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  public parentComp !: ParentComponent;
  public childComp  !: ChildComponent;

  constructor() { }

  
}

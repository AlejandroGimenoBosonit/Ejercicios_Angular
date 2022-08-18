import { Injectable } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  public parentComp !: ParentComponent;
  public childComp  !: ChildComponent;

  constructor() { }

  
}

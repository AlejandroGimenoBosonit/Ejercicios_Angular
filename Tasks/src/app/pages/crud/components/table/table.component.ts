import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { formControls } from '../../interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [`
    p-card {
      width: 450px;
    }
    .card-table {
      width: 100%;
    }
  `]
})
export class TableComponent implements OnInit {


  @Input()  users!      : formControls[];
  @Output() action      : EventEmitter<formControls | number> = new EventEmitter<formControls | number>();

  constructor() {}

  ngOnInit(): void {
    // console.log(this.users.length); 
  }

  // methods
  editUserInfo(user: formControls): void {
    // update output to be emitted
    this.action.emit( user );
  }

  deleteUser(id: number): void {
    // update output to be emitted
    this.action.emit( id );
  }


}

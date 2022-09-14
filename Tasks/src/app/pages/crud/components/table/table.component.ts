import { Component, EventEmitter, Input, Output } from '@angular/core';
import { formControls } from '../../interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
    `
      .table-container {
        width: 100%;
      }
      .card-table {
        width: 100%;
      }
    `,
  ],
})
export class TableComponent {
  @Input() users!: formControls[];
  @Output() action: EventEmitter<formControls | number> = new EventEmitter<
    formControls | number
  >();

  constructor() {}

  // methods
  editUserInfo(user: formControls) {
    // update output to be emitted
    this.action.emit(user);
  }

  deleteUser(id: number) {
    // update output to be emitted
    this.action.emit(id);
  }
}

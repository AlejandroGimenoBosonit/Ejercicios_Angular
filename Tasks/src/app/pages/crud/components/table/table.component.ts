import { Component, OnInit } from '@angular/core';
import { formControls } from '../../interfaces/interfaces';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {

  users: formControls[] = [];

  constructor(
    private usersService      : UsersService          // email validation service
  ) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe( users => {
      this.users = users
    })
  }

}

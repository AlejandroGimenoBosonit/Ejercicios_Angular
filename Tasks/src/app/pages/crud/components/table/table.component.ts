import { AfterContentChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';
import { formControls } from '../../interfaces/interfaces';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit, AfterViewInit {

  users: formControls[] = [];

  constructor(
    private usersService: UsersService          // email validation service
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.usersService
        .getUsers()
        .subscribe( users => {
          this.users = users
          // console.log(users);
    })
  }
  ngAfterViewInit(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.usersService
        .getUsers()
        .subscribe( users => {
          this.users = users
          // console.log(users);
    })
  }


  // methods

  editUserInfo(user: formControls) {
    // console.log(user);
    // call observable method
    this.usersService.fromTableToForm(user);
  }


  deleteUser(id: number) {
    // request to delete
    console.log(id);

    //request
    this.usersService
        .deleteUserById( id )
        .subscribe(() => console.log("user deleted"));
    
  }
}

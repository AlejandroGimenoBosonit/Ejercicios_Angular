import { Component,OnInit } from '@angular/core';
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
    private usersService: UsersService          // email validation service
  ) {}

  ngOnInit(): void {

    this.usersService
        .getUsers()
        .subscribe( users => {
          this.users = users;
        });
         
    this.usersService
        .getFormUser()
        .subscribe( user => {
          // console.log(user);

          // check for update or adding
          const inTable: boolean[] = this.users.map( arrayUser => arrayUser.id === user.id);
          if(inTable.includes(true)){
            // edit mode
            const userArr = [user];
            const newArr = this.users.map( obj => userArr.find(o => o.id===obj.id) || obj );

            this.users = newArr;

          }else{
            // adding mode
            this.users.push(user);
          }
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
    // console.log(id);

    //request
    this.usersService
        .deleteUserById( id )
        .subscribe(() => {
          
        });
    
  }
}

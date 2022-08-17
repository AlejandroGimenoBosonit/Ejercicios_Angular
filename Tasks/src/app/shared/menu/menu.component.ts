import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface MenuTaskItem{
  label: string;
  icon: string;
  value: string;
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [``]
})
export class MenuComponent implements OnInit {

  marginStyle = { 'margin-bottom': '30px' };

  // dropdown options
  tasks!: MenuItem[];
  // selectedTask! : MenuTaskItem;

  constructor() {}

  ngOnInit(): void {
    this.tasks = [
      { 
        label: 'Angular Tasks',
        icon: 'pi pi-desktop',
        items: [
            { label: 'Display Hide', icon: 'pi pi-reddit', routerLink: 'display-hide' },
            { label: 'Comunication Task', icon: 'pi pi-comment', routerLink: 'comunication' },
            { label: 'CRUD Task', icon: 'pi pi-microsoft', routerLink: 'crud' },
            { label: 'Search By Type Task', icon: 'pi pi-search', routerLink: 'search-on-type' },
            { label: 'Light Switch Task', icon: 'pi pi-car', routerLink: 'light-switch' },
            { label: 'Chart Task', icon: 'pi pi-chart-bar', routerLink: 'charts' },
            { label: 'Counter Task', icon: 'pi pi-at', routerLink: 'counter' },
        ]
      }
    ];
  }

}

import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { headerCompomnent } from './header/header.component';
import { userCompomnent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { tasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  // imports: [headerCompomnent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['.././styles.css', './app.css'],
   imports: [userCompomnent, tasksComponent]
   
})
export class App {
  // protected readonly title = signal('my-app');
  users = DUMMY_USERS;
  
  selectedUserId?:string;

  get userId (){
    return 'u1';
  }
get name(){
  return 'Jasmine Washington';
}


  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string){
  this.selectedUserId = id;

  }
}

// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';   
// const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
// export class userCompomnent{ 
// SelectedUser = signal(DUMMY_USERS[randomUserIndex]);
// imgPath = computed(() => 'assets/users/' + this.SelectedUser().avatar);
// // get imgPath(): string {
// //   return 'assets/users/' + this.SelectedUser.avatar;
// // }
// onSelectUser(){
//  const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

//   this.SelectedUser.set(DUMMY_USERS[randomUserIndex]);
// }

// }
import { Component,computed,Input,Output,EventEmitter} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';


@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class userCompomnent{ 
@Input({required: true}) user!:User;
@Input({required: true}) selected!:boolean;
@Output() select = new EventEmitter<string>();


get imgPath(): string {
    return 'assets/users/' + this.user.avatar;
  }
onSelectUser(){
   this.select.emit(this.user.id);

}

}

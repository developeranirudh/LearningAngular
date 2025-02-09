import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

// avatar = input.required<string>();
// name = input.required<string>();
// imagePath = computed(() => { return 'assets/' + this.avatar() });

@Input({required: true}) id! : string;
@Input({required: true}) avatar!: string;  
@Input() name!:string;
@Output() select = new EventEmitter();

// select = output<string>();

get imagePath(){
  return 'assets/' + this.avatar;
}

 onSelectUser(){
  this.select.emit(this.name);
  }
}

import { Component, effect, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CounterAppComponent } from "./counter-project/counter-project.component";
import { HeaderComponent } from './header/header.component';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { UserComponent } from './user/user.component';
import { MemberComponent } from './member/member.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsModule, NgIf, UserComponent, MemberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userName="Bruce"

  userCity="Mumbai"

  players=['Gyani', 'Sam', 'Tony', 'Peter', 'Johny', 'Brane']

  counter=0;

  updateCounter(){
    this.counter++;
  }

  onUserChange(user:string){
    this.userName= user;
  }

  userDetail:any;

  addDetails(val:NgForm){
    console.log(val);
    this.userDetail=val;
  }

  members:undefined|string[];

  handleMembers(members:string[]){
    console.log(members);
    this.members=members;
  }
}

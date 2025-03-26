import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter-project',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './counter-project.component.html',
  styleUrl: './counter-project.component.css'
})
export class CounterAppComponent {
  profileForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required, Validators.maxLength(5)]),
    email:new FormControl('',[Validators.required, Validators.maxLength(50), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
  });

  onSubmit(){
    console.log(this.profileForm.value);
  }
  get name(){
    return this.profileForm.get('name');
  }
  get password(){
    return this.profileForm.get('password');
  }
  get email(){
    return this.profileForm.get('email');
  }


  count=0;

  // handleIncrement(){
  //   this.count = this.count + 1;
  // }
  // handleDecrement(){
  //   this.count = this.count - 1;
  // }
  // handleReset(){
  //   this.count = 0;
  // }

  handleCounter(val:string){
    if(val == "minus"){
      //this.count = this.count - 1;
      if (this.count != 0){
        this.count = this.count - 1;
      }else{
        this.count = 0;
      }
    }else if(val == "plus") {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }


  // handleEvent(event:any){
  //   console.log('Function Called', event);
  //   console.log('Event Type', event.type);
  //   console.log('Event Class Name', (event.target as Element).className);
  // }

  handleEvent(event:any){
    console.log('Function Called', event.type);
    // console.log('Value', (event.target as HTMLInputElement).value);
    //console.log('Function foucs', event.type);
    //console.log('Function blur', event.type);
  } 


  // name =""
  // displayName =""

  // email=""

  // getName(event:Event){
  //   this.name = (event.target as HTMLInputElement).value;
  // }
  
  // showName(){
  //   this.displayName = this.name;
  // }

  // setName(){
  //   this.name = "Sam";
  // }

  // getEmail(val:string){
  //   console.log(val);
  //   this.email = val;
  // }

  // setEmail(){
  //   this.email = "Default@test.com";
  // }

  // count=signal(0);
  // x=20;

  // userName=signal('anil');


  // displayHeading=false;

  // constructor(){
  //   effect(()=>{
  //     // console.log(this.x);
  //     //console.log(this.count());
  //     //console.log(this.userName());

  //     if(this.count()==2){
  //       this.displayHeading=true;
  //       setTimeout(()=>{
  //         this.displayHeading=false;
  //       },2000)
  //     }else{
  //       this.displayHeading=false;
  //     }
  //   })
  // }

  // updateSignal(val:string){
  //   //this.x= 30;
  //   //this.count=signal(100);
  //   //this.count.set(this.count()+1);
  //   //this.x= this.x+1;

  //   if(val=="incr"){
  //     this.count.set(this.count()+1);
  //   }else{
  //     if(this.count()==0){
  //       this.count.set(0);
  //     }else{
  //       this.count.set(this.count()-1);
  //     }
  //   }
  // }


  // toggleValue(){
  //   this.count.set(this.count()+1);
  //   //this.displayHeading=!this.displayHeading
  // }

}

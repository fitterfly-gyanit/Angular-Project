import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-project',
  standalone: true,
  imports: [],
  templateUrl: './counter-project.component.html',
  styleUrl: './counter-project.component.css'
})
export class CounterAppComponent {
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


  name =""
  displayName =""

  email=""

  getName(event:Event){
    this.name = (event.target as HTMLInputElement).value;
  }
  
  showName(){
    this.displayName = this.name;
  }

  setName(){
    this.name = "Sam";
  }

  getEmail(val:string){
    console.log(val);
    this.email = val;
  }

  setEmail(){
    this.email = "Default@test.com";
  }

}

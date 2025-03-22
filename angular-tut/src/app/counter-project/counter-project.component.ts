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


}

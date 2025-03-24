import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterAppComponent } from "./counter-project/counter-project.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count=signal(0);
  x=20;

  userName=signal('anil');


  displayHeading=false;

  constructor(){
    effect(()=>{
      // console.log(this.x);
      //console.log(this.count());
      //console.log(this.userName());

      if(this.count()==2){
        this.displayHeading=true;
        setTimeout(()=>{
          this.displayHeading=false;
        },2000)
      }else{
        this.displayHeading=false;
      }
    })
  }

  updateSignal(val:string){
    //this.x= 30;
    //this.count=signal(100);
    //this.count.set(this.count()+1);
    //this.x= this.x+1;

    if(val=="incr"){
      this.count.set(this.count()+1);
    }else{
      if(this.count()==0){
        this.count.set(0);
      }else{
        this.count.set(this.count()-1);
      }
    }
  }


  toggleValue(){
    this.count.set(this.count()+1);
    //this.displayHeading=!this.displayHeading
  }
}

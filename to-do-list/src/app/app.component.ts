import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';

  task="";
  taskList:{id:number,task:string}[]=[];

  addTask(){
    this.taskList.push({id:this.taskList.length+1,task:this.task});
  }
  deleteTask(taskId:number){
    this.taskList=this.taskList.filter((item)=>item.id!=taskId);
  }
}

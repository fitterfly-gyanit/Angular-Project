import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  @Output() getMembers= new EventEmitter();

  members=['Gyani', 'Sam', 'Tony', 'Peter', 'Johny', 'Brane', 'Anil'];


  loadData(){
    this.getMembers.emit(this.members);
  }

}

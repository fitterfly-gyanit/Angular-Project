import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user:string='';
  @Input() city:string='';
  @Input() player:string='';

  name: null|string ="";

  userName="Gyani"

  

  constructor(private route:ActivatedRoute){
    console.log('constructor');
    this.userName='Anil'
    console.log(this.userName);
  }

  ngOnInit(){
    console.log('ngOnInit');
    this.userName='Sunil'
    console.log(this.userName);
    // this.route.params.subscribe((params: any)=>{
    //   console.log(params);
    //   this.name= params['user'];
    // })
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }

}

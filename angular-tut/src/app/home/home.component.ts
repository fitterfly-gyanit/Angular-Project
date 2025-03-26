import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users=[
    {
      id:1,
      name: 'gyani',
      age: 34
    },
    {
      id:2,
      name: 'anil',
      age: 28
    },
    {
      id:3,
      name: 'peter',
      age: 24
    },
    {
      id:4,
      name: 'sam',
      age: 30
    }
  ]
}

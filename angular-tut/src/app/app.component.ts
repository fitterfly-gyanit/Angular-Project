import { Component } from '@angular/core';
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
  title = 'angular-tut';
  name = "Gyani"
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'buzz-feed';
}

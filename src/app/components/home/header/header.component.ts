import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 fondoUrl = '/src/assets/image/Contactanos.png';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,HomeComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}

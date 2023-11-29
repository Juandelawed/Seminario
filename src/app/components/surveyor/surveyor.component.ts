import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-surveyor',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './surveyor.component.html',
  styleUrl: './surveyor.component.css'
})
export class SurveyorComponent {

}

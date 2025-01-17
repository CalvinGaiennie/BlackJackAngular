import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css',
  imports: [FormsModule],
})
export class SurveyComponent {
  userName: string = '';
}

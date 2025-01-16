import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css',
})
export class SurveyComponent {
  @Input() message: string = '';
}

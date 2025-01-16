import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-survey',
  imports: [FormsModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css',
})
export class SurveyComponent {
  readonly logStr = output<string>();
  userInput: string = '';
  emitValue(value: string): void {
    this.logStr.emit(value);
  }
}

import { Component } from '@angular/core';
import { SurveyComponent } from './survey/survey.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SurveyComponent, FormsModule],
  templateUrl: 'app.component.html',
})
export class AppComponent {}

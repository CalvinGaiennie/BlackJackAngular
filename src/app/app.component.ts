import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, QuizPageComponent],
  templateUrl: 'app.component.html',
})
export class AppComponent {}

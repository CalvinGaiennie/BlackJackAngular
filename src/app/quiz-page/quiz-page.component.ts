import { Component } from '@angular/core';
import { QuizDataService } from '../quiz-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css'],
  imports: [CommonModule],
})
export class QuizPageComponent {
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  selectedAnswer: string = '';

  constructor(private quizService: QuizDataService) {
    this.questions = this.quizService.getQuestions();
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  submitAnswer() {
    if (
      this.selectedAnswer ===
      this.questions[this.currentQuestionIndex].correctAnswer
    ) {
      this.score++;
    }
    this.currentQuestionIndex++;
    this.selectedAnswer = '';
  }

  isQuizFinished() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

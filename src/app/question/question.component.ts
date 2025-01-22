import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Question } from '../quiz-page/quiz-page.component';
@Component({
  selector: 'app-question',
  imports: [NgFor],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  alphabet: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
  @Input() question: Question = {
    question: '',
    answers: [],
    correctAnswer: 0,
  };
  @Input() index: number = 0;
}

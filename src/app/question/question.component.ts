import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Question } from '../card/card.component';
@Component({
  selector: 'app-question',
  imports: [NgFor],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  @Input() question: Question = {
    question: '',
    answers: [],
    correctAnswer: 0,
  };
  @Input() index: number = 0;
}

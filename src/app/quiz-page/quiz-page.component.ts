import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from '../question/question.component';

export interface Question {
  question: string;
  answers: string[];
  correctAnswer: number;
}

@Component({
  selector: 'app-quiz-page',
  imports: [FormsModule, NgFor, QuestionComponent],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css',
})
export class QuizPageComponent {
  message: string = 'hey';
  input: string = '';
  questions: Question[] = [
    {
      question: 'How do you manage state in Angular',
      answers: ['idk', 'good question', 'time to figure it out.', '🤷'],
      correctAnswer: 2,
    },
    {
      question: 'What do I want to learn through this project',
      answers: [
        'How to manage state in angular',
        'Angular Navigation',
        'How to use JS in the template. ex. ngFor',
        'All of the above',
      ],
      correctAnswer: 3,
    },
    {
      question: 'Where should I start?',
      answers: [
        'Anywhere',
        'Page Navigation',
        'State Handling',
        'common directives in the template',
      ],
      correctAnswer: 2,
    },
    {
      question: 'What is the goal of this project',
      answers: [
        'Learn the basics of angular',
        'Build a cool project',
        'IDK',
        'A and B',
      ],
      correctAnswer: 3,
    },
  ];

  currentAnswer = '';
}

//I think I should seperate questions into their own components

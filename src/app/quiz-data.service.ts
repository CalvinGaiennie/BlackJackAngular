import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizDataService {
  questions = [
    {
      question: 'How do you manage state in Angular',
      options: ['idk', 'good question', 'time to figure it out.', '🤷'],
      correctAnswer: 'time to figure it out.',
    },
    {
      question: 'What do I want to learn through this project',
      options: [
        'How to manage state in angular',
        'Angular Navigation',
        'How to use JS in the template. ex. ngFor',
        'All of the above',
      ],
      correctAnswer: 'All of the above',
    },
    {
      question: 'Where should I start?',
      options: [
        'Anywhere',
        'Page Navigation',
        'State Handling',
        'common directives in the template',
      ],
      correctAnswer: 'State Handling',
    },
    {
      question: 'What is the goal of this project',
      options: [
        'Learn the basics of angular',
        'Build a cool project',
        'IDK',
        'A and B',
      ],
      correctAnswer: 'A and B',
    },
  ];
  getQuestions() {
    return this.questions;
  }
}

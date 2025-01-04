import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './button-test.component.html',
  styleUrl: './button-test.component.css',
})
export class ButtonTestComponent {
  userInput: string = '';

  storeUserInput() {
    console.log('Stored input:', this.userInput);
    // Add your storage logic here
  }
}

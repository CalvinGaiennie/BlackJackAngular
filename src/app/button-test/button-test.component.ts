import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-test',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './button-test.component.html',
})
export class ButtonTestComponent {
  userInput = '';
  storedInputs: string[] = [];
  @Output() inputStored = new EventEmitter<string>();

  storeUserInput() {
    if (this.userInput.trim()) {
      this.storedInputs.push(this.userInput);
      this.inputStored.emit(this.userInput);
      this.userInput = '';
    }
  }
}

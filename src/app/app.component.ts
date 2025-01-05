import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenericCardComponent } from './generic-card/generic-card.component';
import { ButtonTestComponent } from './button-test/button-test.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GenericCardComponent,
    ButtonTestComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Playing with Angular';
  storedInputs: string[] = [];

  onInputStored(input: string) {
    this.storedInputs.push(input);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenericCardComponent } from './generic-card/generic-card.component';
import { ButtonTestComponent } from './button-test/button-test.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenericCardComponent, ButtonTestComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'BlackJackAngular';
}

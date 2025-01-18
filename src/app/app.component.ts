import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CardComponent],
  templateUrl: 'app.component.html',
})
export class AppComponent {}

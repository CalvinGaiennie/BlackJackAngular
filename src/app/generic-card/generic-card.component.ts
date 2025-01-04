import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  standalone: true,
  imports: [],
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.css',
})
export class GenericCardComponent {
  @Input() title = 'Generic Card';
  @Input() content = 'This is a generic card';
}

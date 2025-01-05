import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.css',
})
export class GenericCardComponent {
  @Input() title = 'Generic Card';
  @Input() content = 'This is a generic card';
  @Input() storedInputs: string[] = [];
}

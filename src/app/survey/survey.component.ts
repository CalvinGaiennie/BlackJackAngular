import { Component, Input } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css',
  imports: [FormsModule],
})
export class SurveyComponent {
  @Input() message: string = '';

  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  addAppointment() {
    console.log(this.newAppointmentTitle + this.newAppointmentDate);
  }
}

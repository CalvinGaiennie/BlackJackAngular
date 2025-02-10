import { Routes } from '@angular/router';
import { DisplayComponent } from './pages/display/display.component';
import { InputComponent } from './pages/input/input.component';
import { LoginComponent } from './pages/login/login.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'input',
    pathMatch: 'full',
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'display',
    component: DisplayComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'input',
  },
];

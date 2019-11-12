import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'student',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: './@auth/auth.module#AuthModule'
      },
      {
        path: 'student',
        loadChildren: './@modules/@student/student.module#StudentModule'
      }
    ]
  }
];

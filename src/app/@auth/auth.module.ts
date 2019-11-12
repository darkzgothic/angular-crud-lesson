import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { authRoutes } from './auth.routing';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: '../@auth/components/login/login.module#LoginModule'
  },
  {
    path: '',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  declarations: [AuthComponent, LoginComponent],
  exports: [AuthComponent, LoginComponent]
})
export class AuthModule {}

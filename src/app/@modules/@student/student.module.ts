import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { studentRoutes } from './student.routing';
import { StudentComponent } from './student.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [RouterModule.forChild(studentRoutes)],
  declarations: [StudentComponent, HomeComponent],
  exports: [StudentComponent, HomeComponent]
})
export class StudentModule {}

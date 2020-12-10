import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputerComponent } from './computer/computer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgramsComponent } from './programs/programs.component';
import { WhyComponent } from './why/why.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'computer',
    component: ComputerComponent
  },
  {
    path: 'program',
    component: ProgramsComponent
  },
  {
    path: 'why',
    component: WhyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

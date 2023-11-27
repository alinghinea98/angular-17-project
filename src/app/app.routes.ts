import { Routes } from '@angular/router';
import { GenerateProgramComponent } from './components/generate-program/generate-program.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'generate', component: GenerateProgramComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
];

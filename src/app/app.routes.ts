import { Routes } from '@angular/router';
import { GenerateProgramComponent } from './components/generate-program/generate-program.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'FitMe - The revolution is you',
  },
  {
    path: 'generate',
    component: GenerateProgramComponent,
    title: 'FitMe - Genereate personal program',
  },
  {
    path: 'learn-more',
    component: LearnMoreComponent,
    title: 'FitMe - Learn more',
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    title: 'FitMe - Sign Up',
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
];

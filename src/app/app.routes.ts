import { Routes } from '@angular/router';
import { GenerateProgramComponent } from './components/generate-program/generate-program.component';

export const routes: Routes = [
    {path: 'generate', component: GenerateProgramComponent},
    {path: '', redirectTo: '/generate', pathMatch: 'full'},
    {path: '**', component: GenerateProgramComponent}
];

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  host: { class: 'component-container' },
})
export class DashboardComponent {
  private readonly _router = inject(Router);
  goTo(path: string): void {
    this._router.navigate([path]);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learn-more',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn-more.component.html',
  styleUrl: './learn-more.component.scss',
  host: { class: 'component-container' },
})
export class LearnMoreComponent {}

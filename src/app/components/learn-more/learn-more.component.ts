import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-learn-more',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './learn-more.component.html',
  styleUrl: './learn-more.component.scss',
  host: { class: 'component-container' },
})
export class LearnMoreComponent {}

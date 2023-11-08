import { Component, Input, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponent {

  // transform string inputs to booleans automatically
  @Input({transform: booleanAttribute})
  disabled: boolean = false;

}

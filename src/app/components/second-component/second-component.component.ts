import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.scss'
})
export class SecondComponent {

}

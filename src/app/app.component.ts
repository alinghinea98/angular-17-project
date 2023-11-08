import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component.component';
import { SecondComponent } from './components/second-component/second-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FirstComponent, SecondComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  readonly Teams = Teams;
  title = 'angular-17-project';
  showDashboard: boolean = false;
  preferredTeam: Teams = Teams.REAL;
  features: string[] = [
    'New control flow syntax: @if, @else, @for, @switch, etc',
    'SSR as option on new poject and development ready',
    'Standalone components as default',
    'Deferred loading',
    'Custom @Input transforms',
    'esbuild and Vite are enabled by default'
  ];

  // New control flow syntax conclusion
  // kinda weird at first, but a good option when we work with standalone, since is build in and we don't import anything
  // for the new for syntax, track is now required => loops faster and more efficient
  // we also have a fallback if there's no items in the list -> @empty
  // ng generate @angular/core:control-flow

  // new deferred loading functionality
  // @defer works in your template and allows you to separate out chunks of that u'd like to be deferred loaded

  // input transform -> some default options for transform the types + we can create our own transforms

  // the component styles are accepted without to be an array

  // material.angular.io is 2.5x faster because of esbuild and vite


  ngOnInit(): void {
      // setTimeout(() => {
      //   // this will actually increse the loading of the page -> because of SSR?
      //   this.showDashboard = true;
      // }, 5_000);
  }

  chooseRandomTeam(): void {
    const randomIndex = Math.floor(Math.random() * Object.keys(Teams).length / 2);
    this.preferredTeam = randomIndex;
  }

}
export enum Teams {
  REAL,
  BARCA,
  BAYERN,
  JUVENTUS
}

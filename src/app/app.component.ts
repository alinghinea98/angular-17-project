import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OpenaiService } from './service/openai.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OpenaiService]
})
export class AppComponent {
  title = 'angular-17-project';
  constructor(private readonly _openAIService: OpenaiService) {
    const prompt = 'Genereaza-mi un program alimentar pentru inaltimea 176cm si greutate 63kg. Vreau sa cresc in masa musculara. Te rog sa imi dai direct raspunsul sub format JSON.';
    this._openAIService.getOpenaiResponse(prompt).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
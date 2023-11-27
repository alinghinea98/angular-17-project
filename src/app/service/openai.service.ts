import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  private readonly _OPEN_AI_KEY =
    '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';
  constructor(private readonly _httpClient: HttpClient) {}

  getOpenaiResponse(prompt: string): Observable<any> {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this._OPEN_AI_KEY}`,
    });
    const messages = [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: prompt },
    ];
    const data = {
      messages,
      model: 'gpt-4',
    };

    return this._httpClient.post(apiUrl, data, { headers: headers });
  }
}

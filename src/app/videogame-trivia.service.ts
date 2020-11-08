import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VideogameTriviaService {

  constructor(private http: HttpClient) { }

  getQuiz(url: string) {
    return this.http.get(url);
  }

  get() {
    return [ { id: 'assets/questions.json', title: 'Video Game Trivia'} ];
  }
}

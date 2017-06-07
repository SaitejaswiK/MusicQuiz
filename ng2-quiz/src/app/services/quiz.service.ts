import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {

  constructor(private http: Http) { }

  get(url: string) {
    return this.http.get(url).map(res => res.text().length > 0 ? res.json() : null);
  }

  getAll() {
    return [
      { id: 'data/telugu.json', name: 'Telugu' },
      { id: 'data/Tamil.json', name: 'Tamil' },
      { id: 'data/English.json', name: 'English' }
    ];
  }

}

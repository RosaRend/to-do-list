import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: Http) { }

  getStickies(){
    return this.http.get('http://localhost:3000/api/task')
    .map((res)=> res.json());
  }
  postStickies(newEntry){
    return this.http.post('http://localhost:3000/api/task', newEntry)
    .map((res)=> res.json())
  }

  getASticky(theIdOfTheEntry){
    return this.http.get("http://localhost:3000/api/task/"+theIdOfTheEntry)
    .map((res) => res.json());
  }
}

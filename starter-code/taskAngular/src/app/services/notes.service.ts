import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operate/catch';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  errorMessage:any;

  constructor(private http: Http) { }

  getStickies(){
    return this.http.get('http://localhost:3000/api/task')
    .map((res)=> res.json());
  }
  postStickies(newEntry){
    return this.http.post('http://localhost:3000/api/task/create', newEntry)
    .map((res)=> res.json())
  }

  getASticky(theIdOfTheEntry){
    return this.http.get("http://localhost:3000/api/task/"+theIdOfTheEntry)
    .map((res) => res.json());
  }

  removeASticky(){
    return this.http.delete("http://localhost:3000/api/task/:id/remove")
    .map((res => res.json()))
  }

  handleError(e){
    console.log(e)
    return Observable.throw(e.json().message)
  }
//in app componet at least have if the user is logged in functio in there or the whole user component
  signup(user){
    return this.http.post('http://localhost:3000/api/signup', user, {withCredentials: true})
    .map((res)=> {
      return  JSON.parse((<any>res)._body)
    })
    .catch(this.handleError)
  }

  login(user){
    return this.http.post('http://localhost:3000/api/login', user, {withCredentials: true})
    .map((res) => {
      return  JSON.parse((<any>res)._body)
    })
    .catch(this.handleError)
  }

  logout(){
    return this.http.post('http://localhost:3000/api/logout', {}, {withCredentials: true})
    .map(res => {
      return  JSON.parse((<any>res)._body)
    })
    .catch(this.handleError)
  }

  isLoggedIn(){
    return this.http.get('http://localhost:3000/api/loggedin', {withCredentials: true})
    .map(res => {
      //any to get around the strict TYPE
      //res["_body"] also works
      return JSON.parse((<any>res)._body)
    })
    .catch(this.handleError)
  }
}

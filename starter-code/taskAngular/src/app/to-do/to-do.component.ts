import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../services/notes.service'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  theStickies: any;
  newEntry: any = {};
  userSignUp:any = {};
  userLogin:any = {};
  theUser:any = {};
  theError:any;

  constructor(private theService: NotesService) { }
  
  successfulAccess(userObj){
    this.theUser = userObj;
    this.theError = null;
  }

  errorUponAccess(errorObj){
    this.theError = errorObj;
    this.theUser = {};
  }

  tryToSignUp(){
    this.theService.signup(this.userSignUp)
    .subscribe(res => {this.successfulAccess(res)},
    err => {this.errorUponAccess(err)}
    )
  }

  tryToLogin(){

    this.theService.login(this.userLogin)
    .subscribe(res => {this.successfulAccess(res)}, 
    err => {this.errorUponAccess(err)}
    )
  }

  logoutUser(){
    this.theService.logout()
    .subscribe(res => {this.theUser = {}})
  }

  ngOnInit() {
    this.display()
    this.checkForUser()
  }

  display(){
    this.theService.getStickies().subscribe((everyNote)=>{
      this.theStickies = everyNote.reverse();
    })
  }

  checkForUser(){
    this.theService.isLoggedIn()
    .subscribe(res => {this.successfulAccess(res)}, 
    (err => {this.errorUponAccess(err)})
    )
  }

  submit(newEntry){
    this.theService.postStickies(newEntry)
    .subscribe((anEntry)=>{
      this.display()
    })
  }

  delete(){
    this.theService.removeASticky()
    .subscribe((res) => {this.theStickies = {}})
  }
}

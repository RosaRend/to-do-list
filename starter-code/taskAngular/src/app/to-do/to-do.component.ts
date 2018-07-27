import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  theStickies: any;
  newEntry: any;
  
  constructor(private theService: NotesService) { }

  ngOnInit() {
    this.display()
  }

  display(){
    this.theService.getStickies().subscribe((everyNote)=>{
      this.theStickies = everyNote.reverse();
    })
  }

  submit(newEntry){
    this.theService.postStickies(newEntry)
    .subscribe((anEntry)=>{
      this.display()
    })
  }

}

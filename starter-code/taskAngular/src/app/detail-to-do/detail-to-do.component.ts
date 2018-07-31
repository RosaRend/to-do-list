import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service'
// import { TaskRouteComponent } from '../task-route/task-route.component'

@Component({
  selector: 'app-detail-to-do',
  templateUrl: './detail-to-do.component.html',
  styleUrls: ['./detail-to-do.component.css']
})
export class DetailToDoComponent implements OnInit {

  constructor(private theService: NotesService) { }

  ngOnInit() {
    // this.
  }

}

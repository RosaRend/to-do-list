import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { NotesService } from './services/notes.service';
import { Routes, RouterModule } from "@angular/router";
import { DetailToDoComponent } from './detail-to-do/detail-to-do.component';
import { TaskRouteComponent } from './task-route/task-route.component'

const routes: Routes = [
  // { path: '', component: }
]

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    DetailToDoComponent,
    TaskRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

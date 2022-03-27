import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteListComponent } from './components/note-list/note-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NoteCardComponent, NoteListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

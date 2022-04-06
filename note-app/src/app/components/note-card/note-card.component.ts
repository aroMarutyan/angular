import { Component, Input, OnInit } from '@angular/core';
import { eventDispatcher } from '../../store';
import { ActionTypes } from '../../store/actions';
import { Note } from '../../models/note';

declare const feather: any;

// export interface Note {
//   id: string;
//   title: string;
//   note: string;
// }

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input() note!: Note;

  constructor() {}

  ngOnInit() {
    feather.replace();
  }

  completeNote(id: string) {
    eventDispatcher.next({ type: ActionTypes.COMPLETE_NOTE, payload: id });
  }

  deleteNote(id: string) {
    const shouldDelete = confirm('Are you sure you want to delete this note?');

    if (shouldDelete) {
      eventDispatcher.next({ type: ActionTypes.DELETE_NOTE, payload: id });
    }
  }
}

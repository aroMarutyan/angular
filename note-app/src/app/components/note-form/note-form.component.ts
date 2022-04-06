import { Component, OnInit } from '@angular/core';
import { nanoid } from 'nanoid';
import { Note } from '../../models/note';
import { eventDispatcher } from '../../store';
import { ActionTypes } from '../../store/actions';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  constructor() {}

  note: Note = {
    id: '',
    title: '',
    note: '',
    completed: false,
  };

  step = 1;

  isStepComplete(step: number): boolean {
    return step === 1 ? !!this.note.title : !!this.note.note;
  }

  completeStep() {
    if (this.step === 1) {
      const stepComplete = this.isStepComplete(this.step);
      if (stepComplete) {
        this.step += 1;
        return;
      }
    }

    const formComplete = this.isStepComplete(this.step);
    if (formComplete) {
      this.submit(this.note);
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step -= 1;
    }
  }

  resetState() {
    this.note = {
      id: '',
      title: '',
      note: '',
      completed: false,
    };
    this.step = 1;
  }

  submit(note: Note) {
    const noteWithId: Note = {
      ...note,
      id: nanoid(),
    };
    eventDispatcher.next({
      type: ActionTypes.CREATE_NOTE,
      payload: noteWithId,
    });
    this.resetState();
  }

  ngOnInit() {}
}

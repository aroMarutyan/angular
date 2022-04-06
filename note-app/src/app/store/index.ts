import { Subject } from 'rxjs';
import { ActionTypes } from './actions';
import { Note } from '../models/note';
import { data } from './notesRepo';

interface InitialState {
  notes: any[];
}

interface Event {
  type: String;
  payload?: Object;
}

let state: InitialState = {
  notes: [...data],
};

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.GET_NOTES: {
      store.next(state);
      break;
    }

    case ActionTypes.CREATE_NOTE: {
      state = {
        notes: [...state.notes, data.payload],
      };
      store.next(state);
      break;
    }

    case ActionTypes.DELETE_NOTE: {
      const { notes } = state;
      const id = data.payload;
      const updatedNotes = notes.filter((note: Note) => note.id !== id);
      state = {
        notes: updatedNotes,
      };
      store.next(state);
      break;
    }

    case ActionTypes.COMPLETE_NOTE:
      const { notes } = state;
      const id = data.payload;
      const updatedNotes = notes.map((note: Note) =>
        note.id !== id ? note : { ...note, completed: !note.completed }
      );
      state = {
        notes: updatedNotes,
      };
      store.next(state);
      break;

    default:
      break;
  }
});

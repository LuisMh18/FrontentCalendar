import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const temEvent = {
    title: 'Cumpleaños del Jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours( new Date(), 2 ), //le sumamos 2hrs
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Luis Mondragón'
    }
  };

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
      events: [ temEvent ],
      activeEvent: null
   },
   reducers: {
     increment: (state, /* action */ ) => {
       state.counter += 1;
     },
   }
});


// Action creators are generated for each case reducer function
export const { increment } = calendarSlice.actions; 
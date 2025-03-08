import {createSlice} from "@reduxjs/toolkit";
import moment from 'moment';

const slice = createSlice({
    name: 'mentor-schedule', initialState: {
        courseId: null,
        events: [],
        loading: false,
        error: null,
        createEventModalState: {open: false, slotInfo: {start: null, end: null}},
        slots: []
    },
    reducers: {
        updateEvent: (state, {payload}) => {
            const index = state.events.findIndex(event => event.id === payload.event.id);
            if (index !== -1) {
                state.events[index] = payload.event;
            }
        },
        openCreateEventModal: (state, {payload}) => {
            state.createEventModalState = {
                open: !!payload.open,
                start: payload.start,
                end: payload.end,
            };
        },
        setAppointmentSlots: (state, {payload}) => {
            const {results} = payload;
            state.slots = results
        },
        addSlot: (state, {payload}) => {
            const {slot} = payload;
            state.slots.push(slot);
        },
    }
});
export const {
    updateEvent,
    openCreateEventModal,
    setAppointmentSlots,
    addSlot,
} = slice.actions
export const {
    reducer,
} = slice;

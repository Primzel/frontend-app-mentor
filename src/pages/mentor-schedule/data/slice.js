import {createSlice} from "@reduxjs/toolkit";
import moment from 'moment';

const slice = createSlice({
    name: 'mentor-schedule', initialState: {
        courseId: null,
        events: [],
        loading: false,
        error: null,
        createEventModalState: {open: false, slotInfo: {start: null, end: null, slotInfo: null}},
        slots: []
    },
    reducers: {
        updateEvent: (state, {payload}) => {
            const index = state.slots.findIndex(event => event.id === payload.slot.id);
            if (index !== -1) {
                state.slots[index] = payload.slot;
            }
        },
        openCreateEventModal: (state, {payload}) => {
            state.createEventModalState = {
                open: !!payload.open,
                start: payload.start,
                end: payload.end,
                slotInfo: payload.slotInfo,
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
        removeAppointmentSlot: (state, {payload}) => {
            const id = payload;
            state.slots = state.slots.filter(slot => slot.id !== id);
        },
    }
});
export const {
    updateEvent,
    openCreateEventModal,
    setAppointmentSlots,
    addSlot,
    removeAppointmentSlot
} = slice.actions
export const {
    reducer,
} = slice;

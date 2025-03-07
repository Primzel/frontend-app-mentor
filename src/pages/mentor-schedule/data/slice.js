import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'mentor-schedule', initialState: {
        courseId: null,
        events: [],
        loading: false,
        error: null,
    },
    reducers: {
        addEvent: (state, {payload}) => {
            state.events.push(payload.event);
        },
        updateEvent: (state, {payload}) => {
            const index = state.events.findIndex(event => event.id === payload.event.id);
            if (index !== -1) {
                state.events[index] = payload.event;
            }
        },
    }
});
export const {
    addEvent,
    updateEvent,
} = slice.actions
export const {
    reducer,
} = slice;

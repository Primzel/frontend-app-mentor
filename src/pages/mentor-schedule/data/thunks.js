import {addEvent,updateEvent as modifyEvent} from "./slice";

export function createEvent(event) {
    return async function (dispatch,getState) {
        const {mentorScheduleReducer} = getState();

        const newEvent = {
            ...event,
            id: mentorScheduleReducer.events.length + 1,
        };
        dispatch(addEvent({event:newEvent}));
    }
}
export function updateEvent(event) {
    return async function (dispatch,getState) {
        const {mentorScheduleReducer} = getState();
        const index = mentorScheduleReducer.events.findIndex(e => e.id === event.id);
        if (index !== -1) {
            dispatch(modifyEvent({event}));
        }
    }
}

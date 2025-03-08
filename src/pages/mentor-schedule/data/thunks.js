import {
    addSlot,
    updateEvent as modifyEvent,
    openCreateEventModal as shouldOpenCreateEventModal,
    setAppointmentSlots
} from "./slice";
import {createAppointmentSlot, fetchAppointmentSlotApi} from "./api";

export function createEvent(event) {
    return async function (dispatch, getState) {
        createAppointmentSlot(event).then(({data}) => {
            dispatch(addSlot({slot: data}));
        });
    }
}

export function updateEvent(event) {
    return async function (dispatch, getState) {
        const {mentorScheduleReducer} = getState();
        const index = mentorScheduleReducer.events.findIndex(e => e.id === event.id);
        if (index !== -1) {
            dispatch(modifyEvent({event}));
        }
    }
}

export function openCreateEventModal(open, start, end) {
    return async function (dispatch) {
        dispatch(shouldOpenCreateEventModal({open, start, end}));
    }
}

export function fetchAppointmentSlots(userId) {
    return async function (dispatch) {
        fetchAppointmentSlotApi(userId).then(({data}) => {
            dispatch(setAppointmentSlots(data));
        });

    }
}

import {
    addSlot,
    updateEvent as modifyEvent,
    openCreateEventModal as shouldOpenCreateEventModal,
    setAppointmentSlots
} from "./slice";
import {createAppointmentSlot, fetchAppointmentSlotApi, updateAppointmentSlotApi} from "./api";

export function createEvent(event) {
    return async function (dispatch, getState) {
        createAppointmentSlot(event).then(({data}) => {
            dispatch(addSlot({slot: data}));
        });
    }
}

export function updateEvent(slot) {
    return async function (dispatch, getState) {
        updateAppointmentSlotApi({
            start_time: slot.start_time,
            end_time: slot.end_time
        }, slot.id).then(({data}) => {
            dispatch(modifyEvent({slot: data}));
        })
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

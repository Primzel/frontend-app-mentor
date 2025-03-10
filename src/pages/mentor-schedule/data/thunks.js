import {
    addSlot,
    updateEvent as modifyEvent,
    openCreateEventModal as shouldOpenCreateEventModal,
    setAppointmentSlots,
    removeAppointmentSlot,
} from "./slice";
import {
    createAppointmentSlot,
    deleteAppointmentSlotApi,
    fetchAppointmentSlotApi,
    updateAppointmentSlotApi
} from "./api";

export function createEvent(event) {
    return async function (dispatch, getState) {
        createAppointmentSlot(event).then(({data}) => {
            dispatch(addSlot({slot: data}));
        });
    }
}

export function updateAppointmentSlot(slot) {
    return async function (dispatch, getState) {
        updateAppointmentSlotApi({
            start_time: slot.start_time,
            end_time: slot.end_time,
            meeting_length: slot.meeting_length
        }, slot.id).then(({data}) => {
            dispatch(modifyEvent({slot: data}));
        })
    }
}

export function openCreateEventModal(open, start, end, slotInfo) {
    return async function (dispatch) {
        dispatch(shouldOpenCreateEventModal({open, start, end, slotInfo}));
    }
}

export function fetchAppointmentSlots(userId, courseId) {
    return async function (dispatch) {
        fetchAppointmentSlotApi(userId, courseId).then(({data}) => {
            dispatch(setAppointmentSlots(data));
        });

    }
}

export function deleteAppointmentSlot(id) {
    return async function (dispatch) {
        deleteAppointmentSlotApi(id).then(() => dispatch(removeAppointmentSlot(id)));
    }
}

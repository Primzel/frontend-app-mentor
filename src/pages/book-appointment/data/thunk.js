import {fetchAvailableBookingApi} from "./api";
import {setStudentBookings} from "./slice";

export function fetchAvailableBooking(userId, courseId) {
    return async (dispatch) => {
        fetchAvailableBookingApi(userId, courseId).then(({data}) => {
            dispatch(setStudentBookings(data));
        })
    };
}

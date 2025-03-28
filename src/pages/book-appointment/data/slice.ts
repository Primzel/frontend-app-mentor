import {createSlice} from "@reduxjs/toolkit";
import {generateColor} from "../../../common/helper";

const slice = createSlice({
    name: 'student-bookings-store',
    initialState: {
        availableBookings: [],
        userColor: {}
    },
    reducers: {
        setStudentBookings: (state, {payload}) => {
            const userColor = {
                ...((payload||[]).reduce((acc, booking) => {
                    const color = state.userColor[`color-${booking.user}`] || generateColor();
                    return {...acc, [`color-${booking.user}`]: color}
                },state.userColor))
            }

            return {
                ...state,
                userColor: userColor,
                availableBookings: payload.map((booking) => {
                    const color = userColor[`color-${booking.user}`];
                    return {...booking, color}
                })
            }
        },
        clearStudentBookings: (state, {payload}) => {
            return {
                ...state,
                availableBookings: []
            }
        }
    }
})

export const {
    setStudentBookings,
    clearStudentBookings
} = slice.actions
export const {reducer} = slice;

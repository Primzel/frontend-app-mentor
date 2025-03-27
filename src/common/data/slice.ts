import {createSlice} from "@reduxjs/toolkit";

interface MyRolesInfo {
    course_roles: string[];
    is_staff: boolean;
    is_superuser: boolean;
}

const slice = createSlice({
    name: 'myRolesInfo',
    initialState: {
        myRolesInfo: {} as MyRolesInfo,
    },
    reducers: {
        setMyRolesInfo(state, action) {
            return {
                ...state,
                myRolesInfo:{...action.payload},
            };
        },
    },
});

export const {
    setMyRolesInfo,
} = slice.actions;

export const {reducer} = slice;

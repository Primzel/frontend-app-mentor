import {configureStore} from '@reduxjs/toolkit';
import {reducer as mentorScheduleReducer} from './pages/mentor-schedule/data/slice';

export default function initializeStore() {
    return configureStore({
        reducer: {
            mentorScheduleReducer
        },
        // temporarily solutions to disable serializable check for plugin actions
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['plugin/registerOverrideMethod'],
                ignoredPaths: ['plugins'],
            },
        }),
    });
}

export const store = initializeStore();

export type RootState = ReturnType<typeof store.getState>;

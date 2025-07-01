import { combineReducers, configureStore } from "@reduxjs/toolkit"
import pointsReducer from './reducers/PointsSlice'
import settingsReducer from './reducers/SettingsSlice'

const rootReducer = combineReducers({
    pointsReducer,
    settingsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
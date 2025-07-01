import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Point } from "../../models/Point";

export interface PointsState {
    points: Point[]
    selectedPoint: Point | null
    isLoading: boolean
    error: string
}

const initialState: PointsState = {
    points: [],
    selectedPoint: null,
    isLoading: false,
    error: ''
}

export const pointsSlice = createSlice({
    name: 'points',
    initialState,
    reducers: {
        pointsFetching(state) {
            state.isLoading = true
        },
        pointsFetchingSuccess(state, action: PayloadAction<Point[]>) {
            state.isLoading = false
            state.points = action.payload
            state.error = ''
        },
        paintsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        setCurrentPoint(state, action: PayloadAction<Point>) {
            state.selectedPoint = action.payload
        }
    }
})

export default pointsSlice.reducer
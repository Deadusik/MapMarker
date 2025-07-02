import axios from 'axios'
import { pointsSlice } from "./PointsSlice";
// utils 
import { getSearchPointsUrl } from "@/utils/api";
// types
import type { AppDispatch } from "../store";
import type { Point } from '@/models/Point';

export const fetchPoints = (placeName: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(pointsSlice.actions.pointsFetching())

        const response = await axios.get<Point[]>(getSearchPointsUrl(placeName))

        if (!Array.isArray(response.data))
            throw new Error('Unexpected response format')

        dispatch(pointsSlice.actions.pointsFetchingSuccess(response.data))
    } catch (e: unknown) {
        let errorMessage = 'Unknown error'

        if (axios.isAxiosError(e)) {
            errorMessage = e.message
        } else if (e instanceof Error) {
            errorMessage = e.message
        }

        dispatch(pointsSlice.actions.pointsFetchingError(errorMessage))
    }
}
import axios from 'axios'
import { getSearchPointsUrl } from "../../utils/api";
import type { AppDispatch } from "../store";
import { pointsSlice } from "./PointsSlice";
import type { Point } from '../../models/Point';

export const fetchPoints = (placeName: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(pointsSlice.actions.pointsFetching())

        const response = await axios.get<Point[]>(getSearchPointsUrl(placeName))

        dispatch(pointsSlice.actions.pointsFetchingSuccess(response.data))
    } catch (e: unknown) {
        let errorMessage = 'Unknown error'

        if (axios.isAxiosError(e)) {
            errorMessage = e.message
        }

        dispatch(pointsSlice.actions.paintsFetchingError(errorMessage))
    }
}
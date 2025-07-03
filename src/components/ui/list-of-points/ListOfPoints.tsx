import { useState } from 'react';
// redux 
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { pointsSlice } from '@/store/reducers/PointsSlice';
// components
import { PointItem } from '@/components';
import { CircularProgress, Paper } from '@mui/material';
// styled 
import {
  ErrorText, InfoText,
  ItemContainer, PointList,
  PointListCard, PointListContainer,
  PointListItem
} from '@/styled/components/ui/list-of-points/styledListOfPoints';
import { useTranslation } from 'react-i18next';
import { POINT_LIST } from '@/utils/translation';

const ListOfPoints = () => {
  const { t } = useTranslation()
  // states
  const [activePoint, setActivePoint] = useState<number | null>(null)
  // redux variables
  const { points, isLoading, error } = useAppSelector(store => store.pointsReducer)
  const dispatch = useAppDispatch()
  const { setCurrentPoint } = pointsSlice.actions

  // handlers
  const onPointClick = (place_id: number) => {
    setActivePoint(place_id)

    const selectedPoint = points.find(point => point.place_id === place_id)
    if (selectedPoint) {
      dispatch((setCurrentPoint(selectedPoint)))
    }
  }

  return (
    <PointListContainer>
      <PointListCard variant='outlined'>
        {isLoading ?
          <ItemContainer>
            <CircularProgress />
          </ItemContainer>
          :
          <Paper>
            <PointList>
              {points.map((point) => (
                <PointListItem key={point.place_id} divider>
                  <PointItem point={point}
                    isActive={activePoint === point.place_id}
                    onClick={onPointClick} />
                </PointListItem>
              ))}
            </PointList>
          </Paper>
        }
        { // inform if list is empty
          points.length === 0 && !isLoading && !error &&
          <ItemContainer>
            <InfoText>{t(POINT_LIST.noResults)}</InfoText>
          </ItemContainer>
        }
        {error &&
          <ItemContainer>
            <ErrorText>{t(POINT_LIST.error)} {error}</ErrorText>
          </ItemContainer>
        }
      </PointListCard>
    </PointListContainer>
  )
}

export default ListOfPoints
import { useState } from 'react';
// components
import PointItem from './PointItem';
// redux 
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
// material 
import { Box, Card, CircularProgress, List, ListItem, Paper, Typography } from '@mui/material';
import { pointsSlice } from '../../../store/reducers/PointsSlice';

const ListOfPoints = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null)
  // redux variables
  const { points, isLoading, error } = useAppSelector(store => store.pointsReducer)
  const dispatch = useAppDispatch()
  const { setCurrentPoint } = pointsSlice.actions

  const onPointClick = (place_id: number) => {
    setActivePoint(place_id)
    // set current point 
    const selectedPoint = points.find(point => point.place_id === place_id)
    if (selectedPoint) {
      dispatch((setCurrentPoint(selectedPoint)))
    }
  }

  return (
    <Box sx={{
      overflow: "auto"
    }}>
      <Card
        variant='outlined'
        sx={{
          padding: "1px",
          height: "100%",
          overflow: "auto"
        }}>
        {isLoading ?
          <Box sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <CircularProgress />
          </Box>
          :
          <Paper>
            <List sx={{ padding: "0px" }}>
              {points.map((point) => (
                <ListItem key={point.place_id} sx={{
                  padding: '0px'
                }} divider>
                  <PointItem
                    point={point}
                    isActive={activePoint === point.place_id}
                    onClick={onPointClick} />
                </ListItem>
              ))}
            </List>
          </Paper>
        }
        {
          points.length === 0 &&
          <Box sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Typography sx={{ fontSize: '24px' }}>No results 😭</Typography>
          </Box>
        }
      </Card>
    </Box>
  )
}

export default ListOfPoints
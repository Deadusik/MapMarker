import { Box, Card, List, ListItem, Paper } from '@mui/material';
import PointItem from './PointItem';
import { useState } from 'react';
import type { Point } from '../../../models/Point';

// DEV: test data !!!
const points: Point[] = [
  {
    place_id: "1",
    name: "Kyiv",
    addresstype: "City",
    lat: "50.4500336",
    lon: "30.5241361"
  },
  {
    place_id: "2",
    name: "Kyiv",
    addresstype: "City",
    lat: "50.4500336",
    lon: "30.5241361"
  },
  {
    place_id: "3",
    name: "Kyiv",
    addresstype: "City",
    lat: "50.4500336",
    lon: "30.5241361"
  },
  {
    place_id: "4",
    name: "Kyiv",
    addresstype: "City",
    lat: "50.4500336",
    lon: "30.5241361"
  },
  {
    place_id: "5",
    name: "Kyiv",
    addresstype: "City",
    lat: "50.4500336",
    lon: "30.5241361"
  },
  {
    place_id: "6",
    name: "Kyiv",
    addresstype: "City",
    lat: "50.4500336",
    lon: "30.5241361"
  },
  {
    place_id: "7",
    name: "Kyiv",
    addresstype: "City",
    lat: "50.4500336",
    lon: "30.5241361"
  },
  {
    place_id: "8",
    name: "Kyiv",
    addresstype: "City",
    lat: "50.4500336",
    lon: "30.5241361"
  },
  {
    place_id: "9",
    name: "Kyiv",
    addresstype: "City",
    lat: "50.4500336",
    lon: "30.5241361"
  },
  {
    place_id: "10",
    name: "Kyiv",
    addresstype: "City",
    lat: "50.4500336",
    lon: "30.5241361"
  },
]

const ListOfPoints = () => {
  const [activePoint, setActivePoint] = useState('')

  const onPointClick = (place_id: string) => {
    setActivePoint(place_id)
  }

  return (
    <Box sx={{
      overflow: "auto"
    }}>
      <Card sx={{ padding: "1px" }}>
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
      </Card>
    </Box>
  )
}

export default ListOfPoints
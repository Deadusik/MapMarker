import { List, ListItem, Paper } from '@mui/material';
import PointItem from './PointItem';

const items = Array.from({ length: 200 }, (_, i) => `Елемент ${i + 1}`);

const ListOfPoints = () => {
  return (
    <Paper sx={{ overflowY: 'auto' }}>
      <List>
        {items.map((_, index) => (
          <ListItem key={index} sx={{
            padding: '0'
          }} divider>
            <PointItem />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default ListOfPoints
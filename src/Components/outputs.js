import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';import WorkIcon from '@mui/icons-material/Work';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';import Divider from '@mui/material/Divider';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import grossMonthlyIncome from './Inputs/rentalInput'

export function Outputs() {
  return (
    <List 
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem >
        <ListItemAvatar>
          <Avatar>
           <CurrencyExchangeIcon/>
         </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Monthly Cash Flow" /> 
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PriceCheckIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Monthly Income" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MoneyOffIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Total Expenses" />
      </ListItem>
    </List>
  );
}
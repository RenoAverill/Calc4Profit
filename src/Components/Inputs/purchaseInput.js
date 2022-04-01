import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {states} from '../../Constants/states'

export default function PurchaseInput() {

  return (
    <>
      <h2>Purchase Information</h2>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="purchasePrice" placeholder='Purchase Price' variant="filled" /> 
        <TextField id="purchaseClosingCost" placeholder='Purchase Closing Cost' variant="filled" /> 
      </Box>
    </>
  );
}
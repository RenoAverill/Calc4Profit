import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PercentIcon from '@mui/icons-material/Percent';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


export default function PurchaseInput() {
  const [purchasePrice, setPurchasePrice] = React.useState(0)
  const [purchaseClosingCost, setPurchaseClosingCost] = React.useState(0)

  const onPurchasePriceChange = (event) => {
    setPurchasePrice(event.target.value)
  }
  const onPurchaseClosingCostChange = (event) => {
    setPurchaseClosingCost(event.target.value)
  }

  return (
    <>
      <h2 className='header'>Purchase Information</h2>
      <Box
        className='box'
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="purchasePrice" label='Purchase Price' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number' value={purchasePrice} onChange={onPurchasePriceChange}/> 
        <TextField id="purchaseClosingCost" label='Purchase Closing Cost' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PercentIcon/>
            </InputAdornment>
          )
        }}type='number' value={purchaseClosingCost} onChange={onPurchaseClosingCostChange}/> 
      </Box>
    </>
  );
}
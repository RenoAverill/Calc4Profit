import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PercentIcon from '@mui/icons-material/Percent';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import '../../index.css'

export default function ExpensesInput() {
  return (
    <>
    <h2 className='header'>Expenses</h2>
      <Box
        className='box'
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="propertyTaxes" label='Property Taxes Annual' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number'/> 
        <TextField id="insurance" label='Insurance Annual' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number'/> 
        <TextField id="repairsMaintenance" label='Repairs & Maintenance %' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number'/> 
        <TextField id="vacacy" label='Vacancy' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PercentIcon/>
            </InputAdornment>
          )
        }}type='number'/> 
        <TextField id="capitalExpenditures" label='Capital Expenditures' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PercentIcon/>
            </InputAdornment>
          )
        }}type='number'/> 
        <TextField id="managementFees" label='Management Fees' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number'/> 
        <TextField id="electricity" label='Electricity' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number'/> 
        <TextField id="water" label='Water' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number'/> 
        <TextField id="gas" label='Gas' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number'/> 
        <TextField id="hoaFees" label='HOA Fees' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number'type='number'/> 
        <TextField id="garbage" label='Garbage' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number'/> 
        <TextField id="other" label='Other' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number' /> 
      </Box>
    </>
  );
}
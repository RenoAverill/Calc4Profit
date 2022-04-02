import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PercentIcon from '@mui/icons-material/Percent';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function ExpensesInput() {
  return (
    <>
    <h2>Expenses</h2>
      <Box
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
        }}/> 
        <TextField id="insurance" label='Insurance Annual' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}/> 
        <TextField id="repairsMaintenance" label='Repairs & Maintenance %' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}/> 
        <TextField id="vacacy" label='Vacancy' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PercentIcon/>
            </InputAdornment>
          )
        }}/> 
        <TextField id="capitalExpenditures" label='Capital Expenditures' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PercentIcon/>
            </InputAdornment>
          )
        }}/> 
        <TextField id="managementFees" label='Management Fees' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}/> 
        <TextField id="electricity" label='Electricity' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}/> 
        <TextField id="water" label='Water' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}/> 
        <TextField id="gas" label='Gas' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}/> 
        <TextField id="hoaFees" label='HOA Fees' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}/> 
        <TextField id="garbage" label='Garbage' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}/> 
        <TextField id="other" label='Other' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }} /> 
      </Box>
    </>
  );
}
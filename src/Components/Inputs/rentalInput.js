import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


export default function LoanInput() {
  return (
    <>
    <h2>Rental Income</h2>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="grossMonthlyIncome" placeholder='Gross Monthly Income' variant="filled" /> 
      </Box>
    
    </>
  );
}
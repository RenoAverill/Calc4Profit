import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


function LoanInput() {

  const [grossMonthlyIncome, setGrossMonthlyIncome] = React.useState(0)

  const onGrossMonthlyIncomeChange = (event) => {
    setGrossMonthlyIncome(event.target.value)
  }
  return (
    <>
    <h2 className='header'>Rental Income</h2>
      <Box
        className='box'
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="grossMonthlyIncome" label='Gross Monthly Income' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number' value={grossMonthlyIncome} onChange={onGrossMonthlyIncomeChange}/> 
      </Box>
    
    </>
  );

}

export default LoanInput
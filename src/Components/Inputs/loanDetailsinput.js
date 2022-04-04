import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PercentIcon from '@mui/icons-material/Percent';
import InputAdornment from '@mui/material/InputAdornment';

export default function LoanDetailInput() {
  const [downPayment, setDownPayment] = React.useState(0)
  const [interestRate, setInterestRate] = React.useState(0)
  const [loanTerm, setLoanTerm] = React.useState(30)

  const onDownPaymentChange = (event) => {
    setDownPayment(event.target.value)
  }
  const onInterestRateChange = (event) => {
    setInterestRate(event.target.value)
  }
  const onLoanTermChange = (event) => {
    setLoanTerm(event.target.value)
  }



  return (
    <>
      <h2 className='header'>Loan Details</h2>
      <Box className='box' component="form" sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off">

        <TextField id="downPayment" label='Down Payment' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PercentIcon/>
            </InputAdornment>
          )
        }} value={downPayment} onChange={onDownPaymentChange} type='number'/>

        <TextField id="interestRate" label='Interest Rate' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PercentIcon/>
            </InputAdornment>
          )
        }} value={interestRate} type='number' onChange={onInterestRateChange}/> 

        <TextField id="loanTerm" label='Loan Term' variant="filled" value={loanTerm} type='number' onChange={onLoanTermChange}/> 

      </Box>    
    </>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import PropertyInput from '../../Components/Inputs/propertyInput'
import PurchaseInput from '../Inputs/purchaseInput';
import LoanDetailInput from '../Inputs/loanDetailsinput';
import RentalInput from '../Inputs/rentalInput'


export default function RentalCalc() {
  return (
    <Box>
      <PropertyInput/>
      <PurchaseInput/>
      <LoanDetailInput/>
      <RentalInput/>
    </Box>
  );
}
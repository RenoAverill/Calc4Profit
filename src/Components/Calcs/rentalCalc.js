import * as React from 'react';
import Box from '@mui/material/Box';
import PropertyInput from '../../Components/Inputs/propertyInput'
import PurchaseInput from '../Inputs/purchaseInput';
import LoanDetailInput from '../Inputs/loanDetailsinput';
import RentalInput from '../Inputs/rentalInput'
import ExpensesInput from '../Inputs/expensesInput';
import { CalculateButton } from '../Toggles/calculateButton'
import { Outputs } from '../outputs'


export default function RentalCalc() {
  return (
    <Box>
      <PropertyInput/>
      <PurchaseInput/>
      <LoanDetailInput/>
      <RentalInput/>
      <ExpensesInput/>
      <CalculateButton/>
      <Outputs/>
    </Box>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import PropertyInput from '../../Components/Inputs/propertyInput'
import PurchaseInput from '../Inputs/purchaseInput';


export default function RentalCalc() {
  return (
    <Box>
      <PropertyInput/>
      <PurchaseInput/>
    </Box>
  );
}
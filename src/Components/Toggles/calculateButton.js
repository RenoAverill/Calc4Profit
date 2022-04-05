import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function CalculateButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        Calculate Cash Flow
      </Button>
  
    </Stack>
  );
}
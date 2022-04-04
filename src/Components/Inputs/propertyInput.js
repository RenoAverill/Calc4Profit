import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {states} from '../../Constants/states'

export default function PropertyInput() {

  const [streetAdress, setStreetAdress] = React.useState()
  const [city, setCity] = React.useState()
  const [stateCode, setStateCode] = React.useState()
  const [zip, setZip] = React.useState()


  const onStreetAdressChange = (event) => {
    setStreetAdress(event.target.value);
  };
  const onCityChange = (event) => {
    setCity(event.target.value);
  };
  const onStateCodeChange = (event) => {
    setStateCode(event.target.value);
  };
  const onZipChange = (event) => {
    setZip(event.target.value);
  };

  return (
    <>
      <h2 className='header'>Property Information</h2>
      <Box
        className='box'
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="streetAdress" label='Street Address' variant="filled" value={streetAdress} onChange={onStateCodeChange}/> 
        <TextField id="city" label='City' variant="filled" value={city} onChange={onCityChange} /> 
          <TextField
            id="outlined-select-state"
            select
            label="State"
            value={stateCode}
            onChange={onStateCodeChange}
            helperText="Please select your State"
          >
            {states.map((state) => (
              <MenuItem key={state.value} value={state.value}>
                {state.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField id="zip" label='Zip' variant="filled" type='number' value={zip} onChange={onZipChange}/> 
      </Box>
    </>
  );
}
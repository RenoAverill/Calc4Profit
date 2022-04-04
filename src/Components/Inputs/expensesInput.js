import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PercentIcon from '@mui/icons-material/Percent';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {ToggleMonthlyAnnual} from '../Toggles/monthlyAnnualToggle'
import '../../index.css'

export default function ExpensesInput() {
  const [propertyTaxes, setPropertyTaxes] = React.useState(0)
  const [repairsMaintenance, setRepairsMaintenance] = React.useState(0)
  const [insurrance, setInsurrance] = React.useState(0)
  const [vacacy, setVacacy] = React.useState(0)
  const [capitalExpenditures, setCapitolExpenditures] = React.useState(0)
  const [managementFees, setManagementFees] = React.useState(0)
  const [electricity, setElectricity] = React.useState(0)
  const [water, setWater] = React.useState(0)
  const [gas, setGas] = React.useState(0)
  const [hoaFees, setHoaFees] = React.useState(0)
  const [garbage, setGarbage] = React.useState(0)
  const [other, setOther] = React.useState(0)

  const onPropertyTaxesChange = (event) => {
    setPropertyTaxes(event.target.value)
  }
  const onRepairsMaintenance = (event) => {
    setRepairsMaintenance(event.target.value)
  }
  const onInsurranceChange = (event) => {
    setInsurrance(event.target.value)
  }
  const onVacacyChange = (event) => {
    setVacacy(event.target.value)
  }
  const onCapitolExpenditureChange = (event) => {
    setCapitolExpenditures(event.target.value)
  }
  const onManagementFeesChange = (event) => {
    setManagementFees(event.target.value)
  }
  const onElectricityChange = (event) => {
    setElectricity(event.target.value)
  }
  const onWaterChange = (event) => {
    setWater(event.target.value)
  }
  const onGasChange = (event) => {
    setGas(event.target.value)
  }
  const onHoaFeesChange = (event) => {
    setHoaFees(event.target.value)
  }
  const onGarbageChange = (event) => {
    setWater(event.target.value)
  }
  const onOtherChange = (event) => {
    setOther(event.target.value)
  }

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
        <TextField id="propertyTaxes" label='Property Taxes' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number' value={propertyTaxes} onChange={setPropertyTaxes}/> 

        <ToggleMonthlyAnnual id='properyTaxesMonthlyAnnual'/>

        <TextField id="insurance" label='Insurance' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number' value={insurrance} onChange={setInsurrance}/> 

        <ToggleMonthlyAnnual id='insurranceMonthlyAnnual'/>

        <TextField id="repairsMaintenance" label='Repairs & Maintenance %' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number' value={repairsMaintenance} onChange={setRepairsMaintenance}/> 
        <TextField id="vacacy" label='Vacancy' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PercentIcon/>
            </InputAdornment>
          )
        }}type='number' value={vacacy} onChange={setVacacy}/> 
        <TextField id="capitalExpenditures" label='Capital Expenditures' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PercentIcon/>
            </InputAdornment>
          )
        }}type='number' value={capitalExpenditures} onChange={setCapitolExpenditures}/> 
        <TextField id="managementFees" label='Management Fees' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number' value={managementFees} onChange={setManagementFees}/> 
        <TextField id="electricity" label='Electricity' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number' value={electricity} onChange={setElectricity}/> 
        <TextField id="water" label='Water' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number' value={water} onChange={setWater}/> 
        <TextField id="gas" label='Gas' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number' value={gas} onChange={setGas}/> 
        <TextField id="hoaFees" label='HOA Fees' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number' value={hoaFees} onChange={setHoaFees}/> 
        <TextField id="garbage" label='Garbage' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number' value={garbage} onChange={setGarbage}/> 
        <TextField id="other" label='Other' variant="filled"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}type='number' value={other} onChange={setOther}/> 
      </Box>
    </>
  );
}
import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import './DialogBox.css'
import * as Yup from 'yup'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function DialogBox(props) {
  const [open, setOpen] = React.useState(false)
  const [amount, setAmount] = React.useState('')
  const [receivedAmount, setReceivedAmount] = React.useState('')
  const [baseCurrencyName, setBaseCurrencyName] = React.useState('Bitcoin')
  const [exchangeCurrencyName, setExchangeCurrencyName] = React.useState('Ethereum')
  const [valid, setValid] = React.useState(false)

  useEffect(() => {
    if (props.title === 'Sell') setExchangeCurrencyName('xUSD')
  })

  const schema = Yup.object({
    amount: Yup.number().required().positive().moreThan(0),
  })

  schema
    .isValid({
      amount,
    })
    .then(valid => {
      setValid(valid)
    })

  const handleConfirm = () => {
    if (valid === false) return toast.error('Wrong input')

    if (props.title === 'Deposit Funds')
      axios
        .put(
          'http://localhost:1234/funds',
          {
            amount: Number(amount),
          },
          { withCredentials: true }
        )
        .then(response => {
          toast.success(response.data.message)
          handleClose()
          console.log(response)
        })
        .catch(error => {
          toast.error(error.response.data.message)
          console.log(error)
        })
    else
      axios
        .post(
          'http://localhost:1234/transaction',
          {
            amount: Number(amount),
            baseCurrencyName,
            exchangeCurrencyName,
          },
          { withCredentials: true }
        )
        .then(response => {
          toast.success(response.data.message)
          handleClose()
          console.log(response)
        })
        .catch(error => {
          toast.error(error.response.data.message)
          console.log(error)
        })
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setAmount('')
    setReceivedAmount('')
  }

  return (
    <div className="dialog">
      <ToastContainer />
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <hr></hr>
        <DialogContent>
          {props.title === 'Buy' ? (
            <div>
              <div className="container">
                <div className="textField amountBox">
                  <TextField
                    variant="outlined"
                    label="I want to spend"
                    fullWidth
                    size="medium"
                    name="amount"
                    value={amount}
                    onChange={event => {
                      setAmount(event.target.value)
                      setReceivedAmount(event.target.value * Math.random() * 100)
                    }}
                  />
                </div>
                <div className="textField currencyBox">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="baseCurrencyName"
                      value={baseCurrencyName}
                      label="Currency"
                      onChange={event => {
                        setBaseCurrencyName(event.target.value)
                      }}
                    >
                      <MenuItem value={'xUSD'}>xUSD</MenuItem>
                      <MenuItem value={'Ethereum'}>Ethereum</MenuItem>
                      <MenuItem value={'Tether'}>Tether</MenuItem>
                      <MenuItem value={'Bitcoin'}>Bitcoin</MenuItem>
                      <MenuItem value={'BNB'}>BNB</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="container">
                <div className="textField amountBox">
                  <TextField
                    variant="outlined"
                    label="I want to buy"
                    fullWidth
                    size="medium"
                    name="receivedAmount"
                    value={receivedAmount}
                    onChange={event => {
                      setReceivedAmount(event.target.value)
                      setAmount(event.target.value * Math.random() * 100)
                    }}
                  />
                </div>
                <div className="textField currencyBox">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="exchangeCurrencyName"
                      value={exchangeCurrencyName}
                      label="Currency"
                      onChange={event => {
                        setExchangeCurrencyName(event.target.value)
                      }}
                    >
                      <MenuItem value={'xUSD'}>xUSD</MenuItem>
                      <MenuItem value={'Ethereum'}>Ethereum</MenuItem>
                      <MenuItem value={'Tether'}>Tether</MenuItem>
                      <MenuItem value={'Bitcoin'}>Bitcoin</MenuItem>
                      <MenuItem value={'BNB'}>BNB</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          ) : props.title === 'Sell' ? (
            <div>
              <div className="container">
                <div className="textField amountBox">
                  <TextField
                    variant="outlined"
                    label="I want to sell"
                    fullWidth
                    size="medium"
                    name="amount"
                    value={amount}
                    onChange={event => {
                      setAmount(event.target.value)
                      setReceivedAmount(event.target.value * Math.random() * 900)
                    }}
                  />
                </div>
                <div className="textField currencyBox">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="baseCurrencyName"
                      value={baseCurrencyName}
                      label="Currency"
                      onChange={event => {
                        setBaseCurrencyName(event.target.value)
                      }}
                    >
                      <MenuItem value={'Bitcoin'}>Bitcoin</MenuItem>
                      <MenuItem value={'Ethereum'}>Ethereum</MenuItem>
                      <MenuItem value={'Tether'}>Tether</MenuItem>
                      <MenuItem value={'BNB'}>Tether</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="textField">
                <TextField
                  disabled
                  variant="outlined"
                  label="You will receive"
                  fullWidth
                  size="medium"
                  placeholder="xUSD"
                  name="receivedAmount"
                  value={receivedAmount + ' xUSD'}
                />
              </div>
            </div>
          ) : props.title === 'Deposit Funds' ? (
            <div className="textField">
              <TextField
                variant="outlined"
                label="Amount"
                fullWidth
                size="medium"
                placeholder="xUSD"
                name="amount"
                value={amount}
                onChange={event => {
                  setAmount(event.target.value)
                }}
              />
            </div>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

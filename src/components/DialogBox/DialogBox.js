import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import './DialogBox.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

export default function DialogBox(props) {
  const [open, setOpen] = React.useState(false)

  const handleConfirm = () => {
    axios
      .put(
        'http://localhost:1234/funds',
        {
          amount: Number(formik.values.amount),
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    formik.setFieldValue('amount', 30)
  }

  const depositFundsSchema = Yup.object({
    amount: Yup.number().required().positive().integer().min(30),
  })

  const formik = useFormik({
    initialValues: {
      amount: 30,
    },
    validationSchema: depositFundsSchema,
  })

  return (
    <div className="dialog">
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
            <div>Buy</div>
          ) : props.title === 'Sell' ? (
            <div>
              <div className="textFieldDeposit">
                <TextField
                  variant="outlined"
                  label="Amount"
                  fullWidth
                  size="medium"
                  placeholder="xUSD"
                  name="amount"
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                  error={formik.values.amount && formik.errors.amount}
                  helperText={formik.values.amount && formik.errors.amount}
                />
              </div>
              <div className="textFieldDeposit">
                <TextField
                  variant="outlined"
                  label="Amount"
                  fullWidth
                  size="medium"
                  placeholder="xUSD"
                  name="amount"
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                  error={formik.values.amount && formik.errors.amount}
                  helperText={formik.values.amount && formik.errors.amount}
                />
              </div>
            </div>
          ) : props.title === 'Deposit Funds' ? (
            <div className="textFieldDeposit">
              <TextField
                variant="outlined"
                label="Amount"
                fullWidth
                size="medium"
                placeholder="xUSD"
                name="amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                error={formik.values.amount && formik.errors.amount}
                helperText={formik.values.amount && formik.errors.amount}
              />
            </div>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleConfirm()
              handleClose()
            }}
          >
            Confirm
          </Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

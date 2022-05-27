import React from 'react'
import './loginPage.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const LoginPage = () => {
    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 20,
                    width: 480,
                    height: 586,
                },
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Paper elevation={8}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: '50px',
                        marginY: '10px',
                        '& > :not(style)': {
                            height: 30
                        }
                    }}>
                        <Typography className='loginText' variant='h3'>Login</Typography>
                        <TextField className='username' id="outlined-basic" label="Username" variant="outlined" />
                        <TextField className='password' id="outlined-basic" type='password' label="Password" variant="outlined" />
                        <Box>
                            <Button
                                className='button'
                                color="primary"
                                variant="contained"
                                type="submit"
                            >
                                Login
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </div>
    )
}

export default LoginPage

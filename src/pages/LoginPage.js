import React, { useState } from 'react'
import './loginPage.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => {
        axios.post('http://localhost:1234/auth/login', {
            username,
            password
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

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
                        <TextField className='username' size='small' id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                        <TextField className='password' size='small' id="outlined-basic" type='password' label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Box>
                            <Button
                                className='button'
                                color="primary"
                                variant="contained"
                                type="submit"
                                onClick={handleLoginClick}
                            >
                                Login
                            </Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <span className='left' />
                            <small className='or'>Or</small>
                            <span className='right' />
                        </Box>
                        {/* <Button color='secondary' className='gitButton' variant="contained" type="submit" size='large'>Login with Github</Button> */}
                        <Box sx={{ py: 2 }}>
                            <Button
                                className='gitButton'
                                color="secondary"
                                variant="contained"
                                fullWidth
                                type="submit"
                                size="large"
                            >
                                Login with Github
                            </Button>
                        </Box>
                        <Box sx={{ py: 1 }}>
                            <Button
                                className='googleButton'
                                color="secondary"
                                variant="contained"
                                fullWidth
                                type="submit"
                                size="large"
                            >
                                Login with Google
                            </Button>
                        </Box>
                        <Typography variant='h7' className=''>Don't Have An Account? Register <Link to='/register' className='link'>Here</Link></Typography>
                    </Box>
                </Paper>
            </Box>
        </div>
    )
}

export default LoginPage

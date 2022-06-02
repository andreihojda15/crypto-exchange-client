import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{
                    position: 'absolute',
                    left: 100
                }}>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Crypto Exchange
                    </Typography>
                    <Typography variant='subtitle1'>
                        by <b>Cognizant</b> Soft<b>vision</b>
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
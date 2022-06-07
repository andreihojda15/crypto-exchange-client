import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './mainpage.css'
import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import image1 from '../imgs/image1.png'
import MovingIcon from '@mui/icons-material/Moving';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TimelineIcon from '@mui/icons-material/Timeline';

const MainPage = () => {
    const logout = () => {
        // do a logout
    }

    return (
        <>
            <Box className='container' sx={{
                marginTop: 15,
            }}>
                <Paper
                    elevation={8}
                    sx={{
                        width: 1200,
                        height: 600,
                    }}
                >
                    <Drawer variant="permanent"
                        sx={{
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                overflow: 'hidden',
                                position: 'relative',
                                width: '350px',
                                height: '600px'
                            },
                        }}
                        open
                    >
                        <Avatar
                            alt='user profile picture'
                            src={image1}
                            className='picture'
                            sx={{
                                width: 100,
                                height: 100,
                            }}
                        />
                        <Typography variant='h4' sx={{ position: 'relative', top: 70, left: 120 }}>John Doe</Typography>
                        <Typography
                            sx={{
                                position: 'relative',
                                top: 80,
                                left: 140,
                                fontSize: 12,
                                color: 'rgba(0, 0, 0, 0.38)',
                            }}>Joined 10/06/2022</Typography>
                        <List className='list'>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <MovingIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Transaction History' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TimelineIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Currency ratio history' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AccountBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Profile' />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Button
                            type='button'
                            variant='contained'
                            size='large'
                            className='logoutButton'
                            onClick={logout}
                        >
                            Log out
                        </Button>
                    </Drawer>
                </Paper>
            </Box>
        </>
    )
}

export default MainPage
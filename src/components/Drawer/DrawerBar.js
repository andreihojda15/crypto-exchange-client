import React from 'react'
import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import image1 from '../../imgs/image1.png'
import MovingIcon from '@mui/icons-material/Moving';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import axios from 'axios'
import constants from 'constants/constants';

export const DrawerBar = () => {
    const logout = () => {
        localStorage.clear()
        axios.get(`${constants.baseURL}/logout`, { withCredentials: true })
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <Drawer variant="permanent"
            sx={{
                gridArea: 'drawer',
                '& .MuiDrawer-paper': {
                    position: 'relative',
                },
                marginTop: 5,
            }}
            open
        >
            <Box sx={{
                display: 'grid',
                gridTemplateAreas: `'avatar'
                                    'name'
                                    'date'
                                    'list'
                                    'logout'`,
                gridTemplateRows: '120px 50px 20px 300px auto',
                justifyItems: 'center',
            }}>
                <Avatar
                    alt='user profile picture'
                    src={image1}
                    sx={{
                        marginTop: 2,
                        width: 100,
                        height: 100,
                        gridArea: 'avatar',
                    }}
                />
                <Typography variant='h4' sx={{
                    gridArea: 'name',
                    fontSize: 34,
                }}>{localStorage.getItem('displayName')}</Typography>
                <Typography
                    sx={{
                        gridArea: 'date',
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.38)',
                    }}>Joined {localStorage.getItem('createdAt').substring(8, 10)}/{localStorage.getItem('createdAt').substring(5, 7)}/{localStorage.getItem('createdAt').substring(0, 4)}</Typography>
                <List sx={{
                    gridArea: 'list',
                }}>
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
                    onClick={logout}
                    sx={{
                        width: 220,
                        gridArea: 'logout',
                        marginTop: 18,
                    }}
                >
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                        Log out
                    </Link>
                </Button>
            </Box>
        </Drawer >
    )
}

import React from 'react'
import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import image1 from '../imgs/image1.png'
import MovingIcon from '@mui/icons-material/Moving';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Box } from '@mui/system';

export const DrawerBar = () => {
    const logout = () => {
        // do a logout
    }

    return (
        <Drawer variant="permanent"
            sx={{
                '& .MuiDrawer-paper': {
                    position: 'relative',
                },
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
                gridTemplateRows: '100px 50px 20px 300px auto',
                justifyItems: 'center',
            }}>
                <Avatar
                    alt='user profile picture'
                    src={image1}
                    sx={{
                        width: 100,
                        height: 100,
                        gridArea: 'avatar',
                    }}
                />
                <Typography variant='h4' sx={{
                    gridArea: 'name',
                }}>John Doe</Typography>
                <Typography
                    sx={{
                        gridArea: 'date',
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.38)',
                    }}>Joined 10/06/2022</Typography>
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
                        marginY: 5,
                        gridArea: 'logout',
                    }}
                >
                    Log out
                </Button>
            </Box>
        </Drawer>
    )
}

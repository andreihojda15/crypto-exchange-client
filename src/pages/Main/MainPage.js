import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './mainpage.css'
import { DrawerBar } from '../../components/Drawer/DrawerBar'
import { DataGridCrypto } from '../../components/DataGrid/DataGridCrypto'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const MainPage = () => {
    const [value, setValue] = useState('one');
    const [buy, setBuy] = useState(true)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box className='container' sx={{
                marginTop: 10,
            }}>
                <Paper
                    elevation={8}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 4fr',
                        gridTemplateRows: '50px 600px',
                        gridTemplateAreas: `'drawer tabs'
                                            'drawer datagrid'
                                            'drawer fab'`,
                        justifyContent: 'center',
                    }}
                >
                    <Box sx={{
                        gridArea: 'drawer',
                        marginTop: 3,
                    }}>
                        <DrawerBar />
                    </Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        sx={{
                            gridArea: 'tabs',
                            gridColumnStart: 2,
                            gridColumnEnd: 3,
                            gridRow: '100px',
                            marginTop: 5,
                            marginLeft: 5,
                        }}
                    >
                        <Tab value="one" label="Buy" onClick={() => setBuy(true)} />
                        <Tab value="two" label="Sell" onClick={() => setBuy(false)} />
                    </Tabs>
                    {buy ? <DataGridCrypto isBuy={buy} url={'crypto'} /> : <DataGridCrypto isBuy={buy} url={'crypto-sell'} />}
                    <Fab color="primary" aria-label="add" sx={{
                        gridArea: 'fab',
                        gridColumn: 3,
                        marginRight: 3,
                        marginBottom: 3,
                    }}>
                        <AddIcon />
                    </Fab>
                </Paper>
            </Box>
        </>
    )
}

export default MainPage

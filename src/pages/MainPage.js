import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './mainpage.css'
import { DrawerBar } from '../components/DrawerBar'
import { DataGridCrypto } from '../components/DataGrid/DataGridCrypto'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const MainPage = () => {
    const [value, setValue] = useState('one');
    const [buy, setBuy] = useState(true)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box className='container' sx={{
                marginTop: 15,
            }}>
                <Paper
                    elevation={8}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '300px 800px',
                        gridTemplateRows: '50px 600px',
                        gridTemplateAreas: `'drawer tabs'
                                            'drawer datagrid'`,
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
                        }}
                    >
                        <Tab value="one" label="Buy" onClick={() => setBuy(true)} />
                        <Tab value="two" label="Sell" onClick={() => setBuy(false)} />
                    </Tabs>
                    {buy ? <DataGridCrypto isBuy={buy} url={'crypto'} /> : <DataGridCrypto isBuy={buy} url={'crypto-sell'} />}
                </Paper>
            </Box>
        </>
    )
}

export default MainPage

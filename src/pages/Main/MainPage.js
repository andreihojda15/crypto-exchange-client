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
import { Button } from '@mui/material';

const columnsBuy = [
    { field: '_id', hide: true },
    { field: 'name', headerName: 'Name', width: 200 },
    {
        field: 'ratio',
        headerName: 'Price',
        width: 180,
    },
    {
        field: 'exchangeAmount',
        headerName: 'Available In Exchange',
        width: 250,
    },
];

const columnsSell = [
    { field: '_id', hide: true },
    { field: 'name', headerName: 'Name', width: 200 },
    {
        field: 'price',
        headerName: 'Price',
        width: 180,
    },
    {
        field: 'amount',
        headerName: 'Available in Wallet',
        width: 250,
    },
];



const actionColumnBuy = [
    {
        field: "action",
        headerName: "Action",
        width: 120,
        renderCell: (params) => {
            return (
                <Button variant='contained'>Buy</Button>
            );
        },
    },
];

const actionColumnSell = [
    {
        field: "action",
        headerName: "Action",
        width: 120,
        renderCell: (params) => {
            return (
                <Button variant='contained' color='secondary'>Sell</Button>
            );
        },
    },
];

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
                    <DrawerBar />
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
                    {buy ? <DataGridCrypto columns={columnsBuy} actionColumn={actionColumnBuy} url={'crypto'} /> : <DataGridCrypto columns={columnsSell} actionColumn={actionColumnSell} url={'crypto-sell'} />}
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

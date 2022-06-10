import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './mainpage.css'
import { DrawerBar } from '../../components/Drawer/DrawerBar'
import { DataGridCrypto } from '../../components/DataGrid/DataGridCrypto'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DialogBox from '../../components/DialogBox/DialogBox'

const columnsBuy = [
    { field: '_id', hide: true },
    { field: 'name', headerName: 'Name', width: 300 },
    {
        field: 'ratio',
        headerName: 'Price',
        width: 300,
    },
    {
        field: 'exchangeAmount',
        headerName: 'Available In Exchange',
        width: 550,
    },
];

const columnsSell = [
    { field: '_id', hide: true },
    { field: 'name', headerName: 'Name', width: 300 },
    {
        field: 'price',
        headerName: 'Price',
        width: 300,
    },
    {
        field: 'amount',
        headerName: 'Available in Wallet',
        width: 550,
    },
];



const actionColumnBuy = [
    {
        field: "action",
        headerName: "Action",
        width: 120,
        renderCell: (params) => {
            return (
                <DialogBox title='Buy' />
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
                <DialogBox title='Sell' />
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
                    className="paper"
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
                    <DrawerBar notHome={false} />
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

                    <DialogBox title='Deposit Funds' />
                </Paper>
            </Box>
        </>
    )
}

export default MainPage

import { Button, Paper } from '@mui/material'
import { DataGridCrypto } from 'components/DataGrid/DataGridCrypto'
import { DrawerBar } from 'components/Drawer/DrawerBar'
import React from 'react'

const columnsTransaction = [
    { field: '_id', hide: true },
    { field: 'name', headerName: 'Name', width: 200 },
    {
        field: 'soldAmount',
        headerName: 'Sold',
        width: 180,
    },
    {
        field: 'boughAmount',
        headerName: 'Bought',
        width: 250,
    },
    {
        field: 'cryptoInWallet',
        headerName: 'Crypto in Wallet',
        width: 250,
    },
    {
        field: 'currencyInWallet',
        headerName: 'Currency in Wallet',
        width: 250,
    },
    {
        field: 'transactionDate',
        headerName: 'Date',
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

export const Transaction = () => {
    return (
        <Paper
            elevation={8}
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 5fr',
                gridTemplateAreas: `'drawer datagrid'`,
                paddingBottom: 3,
            }}
        >
            <DrawerBar />
            <DataGridCrypto columns={columnsTransaction} actionColumn={actionColumnBuy} url={'transaction-history'} />
        </Paper>
    )
}

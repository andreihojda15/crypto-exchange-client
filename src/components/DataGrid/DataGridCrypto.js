import React, { useState, useEffect } from 'react'
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import { Button } from '@mui/material';
import axios from 'axios';
import constants from '../../constants/constants'

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="primary"
            count={pageCount}
            page={page + 1}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    );
}

export const DataGridCrypto = ({ url }) => {
    const columns = [
        { field: '_id', hide: true },
        { field: 'name', headerName: 'Name', width: 200 },
        {
            field: url === 'crypto' ? 'ratio' : 'price',
            headerName: 'Price',
            width: 180,
        },
        {
            field: url === 'crypto' ? 'exchangeAmount' : 'amount',
            headerName: url === 'crypto' ? 'Available In Exchange' : 'Available in Wallet',
            width: 250,
        },
    ];

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 120,
            renderCell: (params) => {
                return (
                    url === 'crypto' ? <Button variant='contained'>Buy</Button> : <Button variant='contained' color='secondary'>Sell</Button>
                );
            },
        },
    ];

    const [tableBuy, setTableBuy] = useState([])
    const [tableSell, setTableSell] = useState([])

    useEffect(() => {
        axios.get(`${constants.baseURL}/${url}`, { withCredentials: true })
            .then((res) => {
                url === 'crypto' ? setTableBuy(res.data.toBuy) : setTableSell(res.data.toSell)
            }).catch((err) => {
                console.log(err);
            })
    }, [url])

    return (
        <>
            <DataGrid
                rows={url === 'crypto' ? tableBuy : tableSell}
                columns={columns.concat(actionColumn)}
                pagination
                getRowId={(row) => row._id}
                pageSize={5}
                rowsPerPageOptions={[5]}
                components={{
                    Pagination: CustomPagination,
                }}
                sx={{
                    gridArea: 'datagrid',
                    marginTop: 5,
                    height: '65%',
                    marginLeft: 5,
                }}
            />
        </>
    )
}

import React, { useState, useEffect } from 'react'
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
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

export const DataGridCrypto = ({ columns, actionColumn, url }) => {
    const [tableBuy, setTableBuy] = useState([])
    const [tableSell, setTableSell] = useState([])
    const [tableTransaction, setTableTransaction] = useState([])

    useEffect(() => {
        axios.get(`${constants.baseURL}/${url}`, { withCredentials: true })
            .then((res) => {
                if (url === 'crypto') {
                    setTableBuy(res.data.toBuy)
                }
                if (url === 'crypto-sell') {
                    setTableSell(res.data.toSell)
                }
                if (url === 'transaction-history') {
                    setTableTransaction(res.data.response)
                }
            }).catch((err) => {
                console.log(err);
            })
    }, [url])

    return (
        <>
            <DataGrid
                rows={url === 'crypto' ? tableBuy : (url === 'crypto-sell') ? tableSell : tableTransaction}
                columns={url === 'transaction-history' ? columns : columns.concat(actionColumn)}
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

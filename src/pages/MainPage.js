import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './mainpage.css'
import { DrawerBar } from '../components/DrawerBar'
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
import constants from '../constants/constants'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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

const columns = [
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

const actionColumn = [
    {
        field: "action",
        headerName: "Action",
        width: 120,
        renderCell: (params) => {
            return (
                // <div className="cellAction">
                //     <Link
                //         to={`/appointments/${params.row.id}`}
                //         style={{ textDecoration: "none" }}
                //     >
                //         <div className="viewButton">View</div>
                //     </Link>
                //     <div
                //         className="editButton"
                //     //   onClick={() => handleEdit(params.row.id)}
                //     >
                //         Edit
                //     </div>
                //     <div
                //         className="deleteButton"
                //     //   onClick={() => handleDelete(params.row.id)}
                //     >
                //         Delete
                //     </div>
                // </div>
                <Button variant='contained'>Buy</Button>
            );
        },
    },
];

const MainPage = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        axios.get(`${constants.baseURL}/crypto`)
            .then((res) => {
                console.log(res.data.availableCrypto)
                setTableData(res.data.availableCrypto)
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    const [value, setValue] = React.useState('one');

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
                        // width: 1200,
                        // height: 600,
                        // display: 'flex',
                        // justifyContent: 'center',
                        // flexDirection: 'row',
                        // alignItems: 'center',
                        display: 'grid',
                        gridTemplateColumns: '300px 800px',
                        gridTemplateRows: '50px 600px',
                        // gridTemplateRows: 'repeat(1, 1fr)',
                        gridTemplateAreas: `'tabs tabs'
                                            'drawer datagrid'`,
                    }}
                >
                    <DrawerBar sx={{
                        gridArea: 'drawer'
                    }} />
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="primary"
                            sx={{
                                // alignSelf: 'start'
                                gridArea: 'tabs',
                                justifySelf: 'center',
                            }}
                        >
                            <Tab value="one" label="Buy" />
                            <Tab value="two" label="Sell" />
                        </Tabs>
                        <DataGrid
                            rows={tableData}
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
                                // width: '800px',
                                // height: '400px',
                                // position: 'relative',
                                // bottom: 500,
                                // left: 380,
                            }}
                        />
                </Paper>
            </Box>
        </>
    )
}

export default MainPage

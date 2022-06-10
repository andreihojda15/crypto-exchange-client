import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import { DrawerBar } from 'components/Drawer/DrawerBar'
import React from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import './ratio.css'

export const Ratio = () => {
    const data = [
        { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 500, pv: 2400, amt: 2400 },
        { name: 'Mar', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Apr', uv: 100, pv: 2400, amt: 2400 },
        { name: 'May', uv: 500, pv: 2400, amt: 2400 },
        { name: 'Jun', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Jul', uv: 600, pv: 2400, amt: 2400 },
        { name: 'Aug', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Sep', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Oct', uv: 1000, pv: 2400, amt: 2400 },
        { name: 'Nov', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Dec', uv: 400, pv: 2400, amt: 2400 },
    ];

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
                        gridTemplateRows: '50px 700px',
                        gridTemplateAreas: `'drawer .'
                                            'drawer charts'
                                            'drawer .'`,
                        justifyContent: 'center',
                        width: '90%',
                    }}
                >
                    <DrawerBar notHome={true} />
                    <LineChart width={1000} height={500} data={data} className='charts'>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                    </LineChart>
                </Paper>
            </Box>
        </>
    )
}

import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { DrawerBar } from 'components/Drawer/DrawerBar'
import React from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import './ratio.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Ratio = () => {
    const [currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const data = [
        { name: 'Jan', uv: 400 },
        { name: 'Feb', uv: 100 },
        { name: 'Mar', uv: 400 },
        { name: 'Apr', uv: 100 },
        { name: 'May', uv: 500 },
        { name: 'Jun', uv: 400 },
        { name: 'Jul', uv: 600 },
        { name: 'Aug', uv: 400 },
        { name: 'Sep', uv: 400 },
        { name: 'Oct', uv: 1000 },
        { name: 'Nov', uv: 400 },
        { name: 'Dec', uv: 400 },
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
                        // gridTemplateRows: '50px 100px 600px',
                        gridTemplateRows: '0.5fr 1fr 3fr',
                        gridTemplateAreas: `'drawer .'
                                            'drawer select'
                                            'drawer charts'`,
                        justifyContent: 'center',
                        width: '90%',
                        paddingBottom: 1,
                    }}
                >
                    <DrawerBar notHome={true} />
                    <Box sx={{ maxWidth: 200, gridArea: 'select' }}>
                        <Typography sx={{marginBottom: 2,}}>Currency ratio history</Typography>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Crypto</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={currency}
                                label="Crypto"
                                onChange={handleChange}
                            >
                                <MenuItem value={'BTC'}>Bitcoin</MenuItem>
                                <MenuItem value={'ETH'}>Ethereum</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
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

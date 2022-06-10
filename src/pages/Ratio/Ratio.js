import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import { DrawerBar } from 'components/Drawer/DrawerBar'
import React from 'react'

export const Ratio = () => {
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
                                            'drawer .'
                                            'drawer .'`,
                        justifyContent: 'center',
                        width: '90%',
                    }}
                >
                    <DrawerBar notHome={true} />
                </Paper>
            </Box>
        </>
    )
}

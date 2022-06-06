import Box from '@mui/material/Box'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from 'pages/Register'

export default function App() {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Box>
    </>
  )
}

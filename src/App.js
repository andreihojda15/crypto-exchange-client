import Box from '@mui/material/Box'
import LoginPage from './pages/Login/LoginPage'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from 'pages/Register'
import MainPage from 'pages/MainPage'

export default function App() {

  return (
    <>
      <Box sx={{ flexGrow: 1}} style={{ height: '100%', width: '100%'}}>
        <Navbar />
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/main' element={<MainPage />} />
        </Routes>
      </Box>
    </>
  )
}

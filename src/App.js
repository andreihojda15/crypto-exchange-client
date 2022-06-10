import Box from '@mui/material/Box'
import LoginPage from './pages/Login/LoginPage'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register/Register'
import MainPage from 'pages/MainPage'
import Profile from './pages/Profile/Profile'

export default function App() {

  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ height: '100%', width: '100%' }}>
        <Navbar />
        <Routes>
          {localStorage.getItem('username') ?
          <div>
            <Route path='/main' element={<MainPage />} />
            <Route path='/profile' element={<Profile />} />
          </div> 
          : null}
          <Route index element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Box>
    </>
  )
}

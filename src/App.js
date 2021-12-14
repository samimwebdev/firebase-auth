import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Fade from '@mui/material/Fade'

import { Register } from './Register'
import { Login } from './Login'
import { Nav } from './Nav'
import { ForgotPassword } from './ForgotPassword'
import { ResetPassword } from './ResetPassword'
import { Profile } from './Profile'
import { Private } from './Private'
import { AuthProvider, AuthContext } from './context/Auth.context'

const AuthRequired = ({ children }) => {
  const location = useLocation()
  console.log(location)
  const currentUser = React.useContext(AuthContext)
  if (currentUser) {
    return children
  } else {
    return <Navigate to='/login' state={{ from: location.pathname }} />
  }
}

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      TransitionComponent={Fade}
    >
      <AuthProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route
              path='/profile'
              element={
                <AuthRequired>
                  <Profile />
                </AuthRequired>
              }
            />
            <Route
              path='/private'
              element={
                <AuthRequired>
                  <Private />{' '}
                </AuthRequired>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </SnackbarProvider>
  )
}

export default App

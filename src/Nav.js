import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

import { auth } from './utils/firebase.config'
import { AuthContext } from './context/Auth.context'

export const Nav = () => {
  const navigate = useNavigate()
  const currentUser = React.useContext(AuthContext)

  const activeStyle = {
    '&.active': {
      bgcolor: 'primary.dark'
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Firebase Auth
          </Typography>
          {!currentUser && (
            <>
              <Button
                component={NavLink}
                to='/register'
                sx={activeStyle}
                color='inherit'
              >
                Register
              </Button>
              <Button
                color='inherit'
                component={NavLink}
                to='/login'
                sx={activeStyle}
              >
                Login
              </Button>
            </>
          )}
          {currentUser && (
            <>
              <Button
                color='inherit'
                component={NavLink}
                to='/profile'
                sx={activeStyle}
              >
                Profile
              </Button>
              <Button
                color='inherit'
                component={NavLink}
                to='/private'
                sx={activeStyle}
              >
                Private
              </Button>
              <Button
                color='inherit'
                onClick={() => {
                  signOut(auth)
                  navigate('/login')
                }}
              >
                logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

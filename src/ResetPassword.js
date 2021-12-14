import * as React from 'react'
import Avatar from '@mui/material/Avatar'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { confirmPasswordReset } from 'firebase/auth'

import { auth } from './utils/firebase.config'

export const ResetPassword = () => {
  const [userInfo, setUserInfo] = React.useState({
    password: ''
  })

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  console.log(searchParams.get('oobCode'))

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await confirmPasswordReset(
        auth,
        searchParams.get('oobCode'),
        userInfo.password
      )
      console.log('Password Reset successfully')
      navigate('/login')
    } catch (err) {
      console.log(err.message)
    }
    //submitting to firebase
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Reset Password
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                onChange={handleChange}
                id='password'
                label='password'
                name='password'
                autoComplete='password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Reset Password
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

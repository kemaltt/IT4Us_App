import React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import Checkbox from '@mui/material/Checkbox'
// import Link from '@mui/material/Link'
// import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const theme = createTheme()

export default function Login({ setIsLogin, setIsLoading }) {
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem('userData'))
  console.log(userData)
  const userEmail = userData[0].email
  const userPassword = userData[0].password

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (inputLogin) => {
    if (
      userEmail === inputLogin.email &&
      userPassword === inputLogin.password
    ) {
      // setIsLogin(true)
      setMessage(<p style={{ color: 'yellowgreen' }}>Entry successful!</p>)

      setTimeout(() => {
        navigate('/about')
      }, 1000)
    } else {
      setMessage(<p style={{ color: 'red' }}>Email or Eassword false!</p>)
    }
  }

  return (
    <div className="login">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              padding: '1rem',
              color: 'white',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar> */}

            <Typography sx={{ marginBottom: 2 }} component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              // onSubmit={handleSubmit}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {errors.email && <p>Please enter a valid email address</p>}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color="warning"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i,
                  },
                })}
              />

              {errors.password && <p>Please enter a valid password</p>}
              <TextField
                margin="normal"
                marginbottom="8px"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="warning"
                {...register('password', {
                  required: true,
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
                  },
                })}
              />
              {message}
              <Typography
                sx={{ textAlign: 'center', pt: 2, fontSize: '12px' }}
                component="h1"
              >
                Forgot password?
              </Typography>
              <Button
                type="submit"
                variant="contained"
                color="warning"
                sx={{ mt: 2, mb: 2, pl: 5, pr: 5 }}
              >
                Login
              </Button>
              <Typography
                sx={{
                  textAlign: 'center',
                  borderTop: '1px solid white',
                  pt: 2,
                  fontSize: '12px',
                }}
                component="h1"
              >
                New Account
              </Typography>

              <Button
                onClick={() => navigate('/register')}
                variant="contained"
                color="secondary"
                sx={{ mt: 2, mb: 2, pl: 5, pr: 5 }}
              >
                Sing Up
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  )
}

// const handleSubmit = (event) => {
//   event.preventDefault()
//   const data = new FormData(event.currentTarget)
//   const email = data.get('email')
//   const password = data.get('password')

//   if (email === '' || password === '') {
//     setMessage(
//       <p style={{ margin: '5px 0', color: 'red' }}>
//         Please fill in the blanks!
//       </p>,
//     )
//   } else {
//     if (userData.length > 0) {
//       const [userInfo] = userData

//       if (password === '' || email === '') {
//         setMessage(<p style={{ color: 'red' }}>Please fill in the blanks!</p>)
//       } else if (userInfo.email === email && userInfo.password === password) {
//         // setIsLogin(true)
//         setMessage(<p style={{ color: 'green' }}>Entry successful!</p>)
//         setTimeout(() => {
//           navigate('/about')
//         }, 400)
//       } else {
//         setMessage(<p style={{ color: 'red' }}>Email or Eassword false!</p>)
//       }
//     } else {
//       setMessage(
//         <p style={{ color: 'red' }}>User not found please register!</p>,
//       )
//     }
//   }
// }

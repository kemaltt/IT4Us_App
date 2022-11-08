import React from 'react'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" {...props}>
      {'Copyright © '}

      <Link style={{ textDecoration: 'none', color: 'white' }} to={'/privacy'}>
        {' '}
        Privacy Policy
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

import { Box } from '@mui/material'
import React, { FC } from 'react'
import Header from '../../components/Header'

const Dashboard: FC = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to the dashboard" />
      </Box>
    </Box>
  )
}

export default Dashboard

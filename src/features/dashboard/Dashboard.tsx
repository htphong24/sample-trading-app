import React from 'react'
import { Stack, Typography } from '@mui/material'
import { TopTrades } from './components/TopTrades'
import { RejectedTrades } from './components/RejectedTrades'

export const Dashboard: React.FC = (): JSX.Element => {
  return (
    <Stack spacing={2} sx={{ paddingTop: 3, paddingLeft: 2 }}>
      <Typography component="div" variant="h5">
        Repo Dashboard
      </Typography>
      <Stack direction="row" spacing={2} sx={{ padding: 2 }}>
        <Stack direction="column" spacing={2} sx={{ width: '100%' }}></Stack>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ paddingRight: 2 }}>
        <TopTrades />
        <RejectedTrades />
      </Stack>
    </Stack>
  )
}

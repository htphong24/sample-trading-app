import React from 'react'
import { DashboardTile } from './DashboardTile'
import { Typography } from '@mui/material'
import { useGetTotalTradesQuery } from '../../../services'

export const TotalTrades: React.FC = (): JSX.Element => {
  const { data, isFetching, isError } = useGetTotalTradesQuery()
  return (
    <DashboardTile
      title="Total Trades"
      minWidth="10%"
      isLoading={isFetching}
      isError={isError}
    >
      <Typography variant="h2" sx={{ color: '#5d71e2' }}>
        {data?.total}
      </Typography>
    </DashboardTile>
  )
}

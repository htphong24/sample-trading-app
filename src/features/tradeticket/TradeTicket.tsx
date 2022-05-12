import React from 'react'
import { Typography } from '@mui/material'
import { useTicketApis } from './hooks/useTicketApis'

export const TradeTicket: React.FC = (): JSX.Element => {
  debugger
  const { loading, error, ticketId } = useTicketApis()

  return (
    <div>
      <Typography component="div" variant="h3">
        Trade Ticket
      </Typography>
    </div>
  )
}

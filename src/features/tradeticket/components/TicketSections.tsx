import { Stack, TextField } from '@mui/material'
import React from 'react'

interface Props {
  ticketId: string | undefined
}

export const TicketSections: React.FC<Props> = ({ ticketId }): JSX.Element => {
  return (
    <Stack direction="column" spacing={2}>
      <TextField disabled name="ticketId" label="Ticket Id" value={ticketId} />
    </Stack>
  )
}

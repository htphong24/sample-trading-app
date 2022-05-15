import { Stack, TextField } from '@mui/material'
import React from 'react'
import { RepoFormField } from '../../../components'
import { useAppSelector } from '../../../store/hooks'
import { OpenOrFixed } from './OpenOrFixed'
import { RepoTypeDropDown } from './RepoTypeDropDown'

interface Props {
  ticketId: string | undefined
}

export const TicketSections: React.FC<Props> = ({ ticketId }): JSX.Element => {
  const { trader } = useAppSelector((state) => state.ticketDefaultState)
  return (
    <Stack direction="column" spacing={2}>
      <RepoFormField
        disabled
        name="ticketId"
        label="Ticket Id"
        type="text"
        value={ticketId}
      />
      <RepoFormField
        disabled
        name="trader-id"
        label="Trader Id"
        type="text"
        value={trader}
      />
      <RepoTypeDropDown />
      <OpenOrFixed />
    </Stack>
  )
}

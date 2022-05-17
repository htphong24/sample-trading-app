import { Stack, TextField } from '@mui/material'
import React from 'react'
import { RepoFormField } from '../../../components'
import { useAppSelector } from '../../../store/hooks'
import {
  CptyResponse,
  CurrencyResponse,
  BondListResponse
} from '../../../types'
import { BondList } from './Bond'
import { OpenOrFixed } from './OpenOrFixed'
import { RepoTypeDropDown } from './RepoTypeDropDown'
// import { Counterparty } from './Counterparty'
// import { Quantity } from './Quantity'
// import { RepoLeg } from './RepoLeg'

interface Props {
  ticketId: string | undefined
  ccyList: CurrencyResponse[] | undefined
  cptyList: CptyResponse[] | undefined
  bondList: BondListResponse[] | undefined
}

export const TicketSections: React.FC<Props> = ({
  ticketId,
  bondList
}): JSX.Element => {
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
      <BondList bondListData={bondList} />
      {/* <Counterparty cptyList={cptyList} /> */}
      {/* <Settlement currencyList={ccyList} /> */}
      {/* <Quantity /> */}
      {/* <RepoLeg /> */}
    </Stack>
  )
}

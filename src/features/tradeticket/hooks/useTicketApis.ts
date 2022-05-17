import React, { useEffect, useState } from 'react'
import {
  useGetNewTicketIdQuery,
  useGetBondListQuery,
  useGetCptysQuery,
  useGetCurrencyListQuery
} from '../../../services'
import {
  NewTicketIdResponse,
  CurrencyResponse,
  CptyResponse,
  BondListResponse
} from '../../../types'
import { v4 as uuidv4 } from 'uuid'

type ReturnProps = {
  loading: boolean
  error: boolean
  ticketId: NewTicketIdResponse | undefined
  ccyList: CurrencyResponse[] | undefined
  cptyList: CptyResponse[] | undefined
  bondList: BondListResponse[] | undefined
}

export const useTicketApis = (): ReturnProps => {
  // const {
  //   data: ticketId,
  //   isError: ticketIdError,
  //   isSuccess: isTicketIdSuccesss
  // } = useGetNewTicketIdQuery()

  const ticketId: NewTicketIdResponse = {
    newId: uuidv4()
  }
  const ticketIdError = false
  const isTicketIdSuccess = true

  const {
    data: bondList,
    isError: isBondListError,
    isSuccess: isBondListSuccess
  } = useGetBondListQuery()
  const {
    data: cptyList,
    isError: isCptyError,
    isSuccess: isCptySuccess
  } = useGetCptysQuery()
  const {
    data: ccyList,
    isError: isCcyError,
    isSuccess: isCcySuccess
  } = useGetCurrencyListQuery()

  const [loading, setLoading] = useState<boolean>(true)
  const [err, setErr] = useState<boolean>(false)

  useEffect(() => {
    if (
      isTicketIdSuccess &&
      isBondListSuccess &&
      isCptySuccess &&
      isCcySuccess
    ) {
      setLoading(false)
    }
  }, [isBondListSuccess, isCcySuccess, isCptySuccess, isTicketIdSuccess])

  useEffect(() => {
    if (ticketIdError || isBondListError || isCptyError || isCcyError) {
      setLoading(false)
      setErr(true)
    }
  }, [isBondListError, isCcyError, isCptyError, ticketIdError])

  return { loading, error: err, ticketId, ccyList, cptyList, bondList }
}

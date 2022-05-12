import React, { useEffect, useState } from 'react'
// import { useGetNewTicketIdQuery } from '../../../services'
import { NewTicketIdResponse } from '../../../types'
import { v4 as uuidv4 } from 'uuid'

type ReturnProps = {
  loading: boolean
  error: boolean
  ticketId: NewTicketIdResponse | undefined
}

export const useTicketApis = (): ReturnProps => {
  const ticketId: NewTicketIdResponse = {
    newId: uuidv4()
  }
  const ticketIdError = false
  const isTicketIdSuccess = true
  const data = ticketId
  const isError = ticketIdError
  const isSuccess = isTicketIdSuccess

  const [loading, setLoading] = useState<boolean>(true)
  const [err, setErr] = useState<boolean>(false)

  useEffect(() => {
    if (isTicketIdSuccess) {
      setLoading(false)
    }
  }, [isTicketIdSuccess])

  useEffect(() => {
    if (ticketIdError) {
      setLoading(false)
      setErr(true)
    }
  }, [ticketIdError])

  return { loading, error: err, ticketId }
}

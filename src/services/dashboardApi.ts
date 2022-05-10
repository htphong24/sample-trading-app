import { createApi } from '@reduxjs/toolkit/query/react'
import { rawBaseQuery } from './shared'
import * as types from '../types'
import { DASHBOARD_API, CHART_COLOR_LIST } from './constants'

export const dashboardApi = createApi({
  reducerPath: DASHBOARD_API,
  baseQuery: rawBaseQuery,
  endpoints: (builder) => ({
    getTotalTrades: builder.query<types.TotalTradesApiResponse, void>({
      query: () => 'totalTrades'
    }),
    getTotalClients: builder.query<types.TotalClientsApiResponse, void>({
      query: () => 'totalClients'
    }),
    getTopTrades: builder.query<types.TopTradesApiResponse, void>({
      query: () => 'topTrades'
    }),
    getRejectedTrades: builder.query<types.RejectedTradesApiResponse[], void>({
      query: () => 'rejectedTrades'
    }),
    getCashByMonthChartData: builder.query<
      types.CashByMonthApiResponse[],
      void
    >({
      query: () => 'cashByMonth',
      transformResponse: (series: types.CashByMonthApiResponse[]) => {
        return series.map((item, index) => ({
          ...item,
          type: 'column',
          color: CHART_COLOR_LIST[index] || ''
        }))
      }
    })
  })
})

export const {
  useGetTopTradesQuery,
  useGetRejectedTradesQuery,
  useGetTotalClientsQuery,
  useGetCashByMonthChartDataQuery,
  useGetTotalTradesQuery
} = dashboardApi

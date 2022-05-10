import React from 'react'
import { Card, CardContent, CircularProgress, Typography } from '@mui/material'
import CloudOffIcon from '@mui/icons-material/CloudOff'
// import { number } from 'yup'
// import { JsxEmit } from 'typescript'

interface DashboardTileProps {
  minWidth: string | number
  title: string
  subTitle?: string
  isLoading?: boolean
  isError?: boolean
  children: React.ReactNode
}

export const DashboardTile: React.FC<DashboardTileProps> = ({
  minWidth,
  title,
  subTitle,
  isLoading = false,
  isError = false,
  children
}): JSX.Element => {
  return (
    <Card raised sx={{ minWidth: { minWidth }, textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondar">
          {subTitle}
        </Typography>
        {isLoading && <CircularProgress color="secondary" />}
        {isError && <CloudOffIcon color="secondary" sx={{ fontSize: 50 }} />}
        {!isLoading && !isError && children}
      </CardContent>
    </Card>
  )
}

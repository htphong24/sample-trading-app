import { format } from 'date-fns'

export const dateFormatter = (date: number | Date) =>
  format(new Date(date), 'yyyy/MM/dd')

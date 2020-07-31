import { IStatus } from 'models/types'

export const colorsMap = [
  ['#E3E7F9', '#405493'],
  ['#CEF0F4', '#20ADC5'],
  ['#F0F4E1', '#ACAF36'],
  ['#FEE8D3', '#E97428'],
  ['#FCD6DE', '#E52A50'],
]

export function groupByStatus(applicants: IStatus[]) {
  const formattedData = applicants.reduce((acc: any, current) => {
    const { status } = current
    if (!acc[status]) {
      acc[status] = []
    }
    acc[status].push(current)
    return acc
  }, {})
  return formattedData
}

const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

export const formatDate = (dateString: number) => {
  const date = new Date(dateString)
  const day = date.getDay()
  const month = date.getMonth()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const formattedMinutes = minutes <= 9 ? '0' + minutes : minutes
  return day + ' ' + months[month] + ' ' + hour + ':' + formattedMinutes
}

export const REQUEST_STATUSES = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
}

export const APPLICANT_STATUSES = {
  Appointment_Set: 'Appointment set',
  Property_Viewed: 'Property viewed',
  Interested: 'Interested',
  Offer_Accepted: 'Offer accepted',
}
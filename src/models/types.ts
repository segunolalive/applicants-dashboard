export enum IconType {
  Back,
  Chat,
  Menu,
  Power,
  Profile,
  More,
  Search,
  Support,
}

export type applicantStatus =
  | 'Appointment_Set'
  | 'Property_Viewed'
  | 'Interested'
  | 'Offer_Accepted'

export interface applicantProps {
  id: number
  firstname: string
  lastname: string
  phone: string
  email: string
  initials: string
  status: applicantStatus
  bid?: string
  viewedDate: number
  appointmentDate?: number
}

export interface IStatus {
  status: string
}

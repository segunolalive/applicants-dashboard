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

export type appointmentStatus =
  | 'Appointment_Set'
  | 'Property_Viewed'
  | 'Interested'
  | 'Offer_Accepted'

export interface appointmentProps  {
  fullname: string
  phone: string
  email: string
  status: appointmentStatus
  date?: string
  bid?: string
}

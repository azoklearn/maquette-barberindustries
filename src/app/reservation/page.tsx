import { redirect } from 'next/navigation'
import { BOOKING_URL } from '@/constants/booking'

export default function ReservationPage() {
  redirect(BOOKING_URL)
}

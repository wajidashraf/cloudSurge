import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/charitystrategy')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://outlook.office.com/book/BookingPortal%40cloudsurge.uk/s/MnnoPcqGKU2T2lApMFDtVA2'
    throw redirect({
      to: '/',
    })
  },
})
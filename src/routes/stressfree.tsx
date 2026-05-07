import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/stressfree')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://outlook.office.com/book/BookingPortal%40cloudsurge.uk/s/415EkajqlkmqjlrwrJr44g2'
    throw redirect({
      to: '/',
    })
  },
})

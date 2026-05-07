import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/mtf2025')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://outlook.office.com/book/BookingPortal%40cloudsurge.uk/s/n6KimVsCmUeOwJli3THHKw2'
    throw redirect({
      to: '/',
    })
  },
})
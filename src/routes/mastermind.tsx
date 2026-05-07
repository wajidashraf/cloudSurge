import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/mastermind')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://chat.whatsapp.com/IRFwtmfMzQ2BhqLpwZJWke'
    throw redirect({
      to: '/',
    })
  },
})
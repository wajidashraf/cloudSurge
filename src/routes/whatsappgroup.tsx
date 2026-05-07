import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/whatsappgroup')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://chat.whatsapp.com/IRFwtmfMzQ2BhqLpwZJWke'
    throw redirect({
      to: '/',
    })
  },
})
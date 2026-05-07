import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/personality')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://www.16personalities.com/free-personality-test'
    throw redirect({
      to: '/',
    })
  },
})

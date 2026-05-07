import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/english')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://www.efset.org/'
    throw redirect({
      to: '/',
    })
  },
})

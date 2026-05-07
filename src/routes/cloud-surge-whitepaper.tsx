import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/cloud-surge-whitepaper')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://cloudsurge.uk/whitepaper/'
    throw redirect({
      to: '/',
    })
  },
})
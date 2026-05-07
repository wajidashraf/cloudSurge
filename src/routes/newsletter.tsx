import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/newsletter')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://cloudsurge.uk/newsletter-2/'
    throw redirect({
      to: '/',
    })
  },
})
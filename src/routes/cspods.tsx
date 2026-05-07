import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/cspods')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://cloudsurge.uk/pod-model/'
    throw redirect({
      to: '/',
    })
  },
})
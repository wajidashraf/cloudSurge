import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/linkedin-zhagum')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://link.v1ce.co.uk/aaft3o/351736'
    throw redirect({
      to: '/',
    })
  },
})
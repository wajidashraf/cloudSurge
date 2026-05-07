import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/linkedin-ilyas')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://ik.bizcard.cloudsurge.uk/'
    throw redirect({
      to: '/',
    })
  },
})
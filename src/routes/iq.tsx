import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/iq')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://forms.office.com/e/jvvMRZZiW4'
    throw redirect({
      to: '/',
    })
  },
})

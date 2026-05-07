import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/nextwebinar')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://events.teams.microsoft.com/event/9f6cc38e-712c-46b2-8d88-247a1f1b3ba3%4046c9827f-ab05-45a8-b96f-476ecc729df9'
    throw redirect({
      to: '/',
    })
  },
})
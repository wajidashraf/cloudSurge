import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/webinar')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://events.teams.microsoft.com/event/fbad434d-43d1-45c2-881f-36c668f16c01@46c9827f-ab05-45a8-b96f-476ecc729df9'
    throw redirect({
      to: '/',
    })
  },
})
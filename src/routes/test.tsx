import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://forms.office.com/e/Gg0vGWMiuc'
    throw redirect({
      to: '/',
    })
  },
})

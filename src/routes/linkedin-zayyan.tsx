import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/linkedin-zayyan')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://www.linkedin.com/in/zayyan-hafeez-653866209/'
    throw redirect({
      to: '/',
    })
  },
})

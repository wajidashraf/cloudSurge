import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/welcomebyilyas')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://www.youtube.com/watch?v=q5RCN7EHOp4'
    throw redirect({
      to: '/',
    })
  },
})
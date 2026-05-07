import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/linkedingroup')({
  beforeLoad: () => {
    // Redirect to external URL - using the main LinkedIn company page as primary
    window.location.href = 'https://www.linkedin.com/company/cloud-surge'
    throw redirect({
      to: '/',
    })
  },
})
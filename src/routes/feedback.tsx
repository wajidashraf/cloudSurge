import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/feedback')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://forms.microsoft.com/Pages/ResponsePage.aspx?id=f4LJRgWrqEW5b0duzHKd-TCJIbHbKOJKqZu2yb9aJ9JUNU9JWFQ5SkJFR0ZUM1Y2U1FMNDE3VEpGUiQlQCN0PWcu'
    throw redirect({
      to: '/',
    })
  },
})
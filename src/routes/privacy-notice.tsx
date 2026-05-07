import { createFileRoute } from '@tanstack/react-router'
import PrivacyNotes from '@/pages/PrivacyNotes'

export const Route = createFileRoute('/privacy-notice')({
  component: PrivacyNotes,
})

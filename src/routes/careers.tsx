import { Careers } from '@/pages/Careers'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/careers')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
    <Careers/>
  </>
  )
}

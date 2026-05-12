import { SurgeCare } from '@/pages/SurgeCare'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/surge-care')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
  <SurgeCare/>
  </>
}

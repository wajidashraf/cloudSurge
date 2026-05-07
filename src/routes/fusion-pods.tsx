import FusionPods from '@/pages/FusionPod'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fusion-pods')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <FusionPods/>
  </div>
}

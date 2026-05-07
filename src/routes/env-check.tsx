import { EnvCheck } from '@/pages/EnvCheck'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/env-check')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<EnvCheck />
		</>
	)
}


import { createFileRoute, redirect } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const EnvCheck = lazy(() =>
  import('@/pages/EnvCheck').then((m) => ({ default: m.EnvCheck }))
)

export const Route = createFileRoute('/env-check')({
	beforeLoad: () => {
		if (import.meta.env.PROD) {
			throw redirect({ to: '/' })
		}
	},
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<Suspense fallback={null}>
			<EnvCheck />
		</Suspense>
	)
}


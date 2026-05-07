import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import Zaptica from '@/pages/Zaptica'

export const Route = createFileRoute('/zaptica')({
  component: App,
})

function App() {
  return (
    <div className="App">
      <Zaptica />
    </div>
  )
}

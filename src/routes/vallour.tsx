import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import Vallour from '@/pages/Vallour'

export const Route = createFileRoute('/vallour')({
  component: App,
})

function App() {
  return (
    <div className="App">
      <Vallour />
    </div>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import Fawrii from '@/pages/Fawrii'

export const Route = createFileRoute('/fawrii')({
  component: App,
})

function App() {
  return (
    <div className="App">
      <Fawrii />
    </div>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import { Success } from '@/pages/Success'

export const Route = createFileRoute('/success-stories')({
  component: App,
})

function App() {
  return (
    <div className="App">
      <Success />
    </div>
  )
}

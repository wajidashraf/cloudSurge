import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import GPTriage from '@/pages/Gptriage'

export const Route = createFileRoute('/gptriage')({
  component: App,
})

function App() {
  return (
    <div className="App">
      <GPTriage />
    </div>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import Genera from '@/pages/Genaiera'

export const Route = createFileRoute('/Genaiera')({
  component: App,
})

function App() {
  return (
    <div className="App">
      <Genera />
    </div>
  )
}

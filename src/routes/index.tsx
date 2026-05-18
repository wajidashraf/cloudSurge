import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import { Home } from '@/pages/Home'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  )
}

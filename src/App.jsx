import { useState } from 'react'
import logo from './logo.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-primary">
      <h1 className='text-white text-7xl font-bold text-center flex min-h-screen items-center justify-center'>Vite + React + Tailwind</h1>
    </div>
  )
}

export default App

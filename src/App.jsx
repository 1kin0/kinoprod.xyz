import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Components
import Header from './components/Header.jsx'

//Shaders
import FaultyTerminal from './components/effects/FaultyTerminal.jsx'
import LightRays from './components/effects/LightRays.jsx'

//Vercel
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <FaultyTerminal/>

      <h1>Vite + React</h1>
      <p>Welcome to my homepage!</p>

      <Analytics/>
      <SpeedInsights/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Components
import Header from './components/Header.jsx'

//Shaders
import FaultyTerminal from './components/fxs/FaultyTerminal.jsx'

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

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Analytics/>
      <SpeedInsights/>
    </>
  )
}

export default App

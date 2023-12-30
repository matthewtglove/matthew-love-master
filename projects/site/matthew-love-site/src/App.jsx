import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="welcomeMessage">
        <h1>Welcome to Matthew Love&apos;s website!</h1>
        <p>It&apos;s a little empty right now. More to come soon!</p>
      </div>
      <div>
        <p>This website is made with Vite + React:</p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <p>Here&apos;s a cool button. What happens when you press it?</p>
        <button onClick={() => setCount(count <= 1 ? (count) => count + 1 : (count) => count * count)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

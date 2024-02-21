import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("orange")
  const click = color =>{
    setColor(color)
  }
  useEffect(()=>{
    document.body.style.backgroundColor= color
  },[color])

  return (
    <>
     <div className='container'>

      <h1>Pick a color!</h1>
      <p>You'll see the background transform</p>
      <div className="card">
        <button onClick={() => click("lightblue")}>
          Blue
        </button>
        <button onClick={() => click("lightgreen")}>
          Green
        </button>
        <button onClick={() => click("yellow")}>
          Yellow
        </button>
        <button onClick={() => click("purple")}>
          Purple
        </button>
      </div>
     </div>

    </>
  )
}

export default App

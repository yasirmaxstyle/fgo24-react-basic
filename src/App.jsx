import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function add() {
    if (count > 10) return
    setCount(count++)
  }

  function sub() {
    if (count < 0) return
    setCount(count--)
  }

  return (
    <>
      <div className='container'>
        <div onClick={function () { sub() }}>
          <button>-</button>
        </div>
        <div>
          {count}
        </div>
        <div onClick={function () { add() }}>
          <button>+</button>
        </div>
      </div>
    </>
  )
}

export default App

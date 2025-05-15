import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div onClick={function () { if (count > 0) setCount(count - 1) }}>
          <button>-</button>
        </div>
        <div>
          {count}
        </div>
        <div onClick={function () { if (count < 10) setCount(count + 1) }}>
          <button>+</button>
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1>Hola</h1>
    <div className="card">
      <button onClick={() => setCount((prevcount) => prevcount +1)}>
        count is {count}
      </button>
    </div>
    
    </>
  )
}

export default App

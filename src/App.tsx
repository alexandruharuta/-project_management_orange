import { useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className='text-3xl font-bold underline'>Hello 2</h1>
      <Button className='bg-sky-500/75 px-3 py-2 text-sky-50 rounded-lg'>Button</Button>

    </>
  )
}

export default App

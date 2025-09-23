import React, { useRef } from 'react'
import Buttons from './components/Buttons'
function App() {
  const changer = useRef("");
  return(
    <>
    <div ref={changer} className="w-full h-screen bg-sky-500 flex items-end p-10 justify-center">
      <div className="flex p-3 bg-white rounded-lg gap-[10px]"><Buttons data='red' screen={changer}/><Buttons data='green'screen={changer}/><Buttons data='blue'screen={changer}/></div>
    </div>
    </>
  )
}

export default App

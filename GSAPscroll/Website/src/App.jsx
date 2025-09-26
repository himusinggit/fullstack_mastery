import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    
    <div>
      <h1 className='text-3xl'>Hello, World!</h1>
      <p>Welcome to my React application.</p>
    </div>
    
  )
}

export default App

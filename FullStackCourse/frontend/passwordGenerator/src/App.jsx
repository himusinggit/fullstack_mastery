import React, { useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState("");
  const pass=useRef();
  const generatePasscode=(len)=>{
    let mystr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass="";
    if(includeNumbers){
      mystr+="0123456789";
    }
    if(includeSpecialChars){
      mystr+="!@#$%^&*()_+?><:{}[]";
    }
    for(let i=0;i<len;i++){
      let char=Math.floor(Math.random()*mystr.length);
      pass+=mystr.charAt(char);
    }
    setPassword(pass);
  }
  const copyToClip=()=>{
    pass.current.select();
    window.navigator.clipboard.writeText(password);
  }
  useEffect(()=>{
    generatePasscode(length);
  },[length,includeNumbers,includeSpecialChars])

  return (
    <>
    <div className='w-1/2 mx-auto mt-20 p-10 bg-slate-800 rounded-lg flex flex-col items-center gap-5'>
      <h1 className='text-white text-2xl'>Password Generator</h1>
      <div className='flex '>
        <input ref={pass} readOnly type="text" value={password} className='bg-slate-600 w-[300px] outline-none text-white text-xl rounded-l-lg p-2'/>
        <button onClick={copyToClip} className='bg-green-500 text-white p-2 rounded-r-lg'>copy</button>
      </div>
      <div className='flex gap-3 mt-5'>
        <input type="range" min={6} max={16} value={length} className='text-white' onChange={(e)=>{setLength(e.target.value)}}/>
        <label className='text-white'>Length:{length}</label>
        <input type="checkbox" checked={includeNumbers} onChange={(e)=>{setIncludeNumbers((prev)=>!prev)}}/>
        <label className='text-white'>numbers</label>
        <input type="checkbox" checked={includeSpecialChars} onChange={()=>{setIncludeSpecialChars((prev)=>!prev)}} />
        <label className='text-white'>specialChar</label>
      </div>
    </div>
    </>
  )
}

export default App

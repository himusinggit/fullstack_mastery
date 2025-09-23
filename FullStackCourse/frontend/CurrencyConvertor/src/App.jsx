import React, { useEffect, useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [currency, setCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  let allcurrency=Object.keys(useCurrencyInfo("usd"));
  // console.log(allcurrency);
  let result=from*useCurrencyInfo(currency)[toCurrency];
  const convert=()=>{
    setTo(result);
  }
  const swap=()=>{
    setFrom(to);
    setTo(from);
    setCurrency(toCurrency);
    setToCurrency(currency);
  }
  return (
    <>
    <div className='w-full h-screen flex items-center justify-center bg-gray-800'>
      <div className='p-10 bg-red-300 rounded-lg flex flex-col gap-10'>
        <div className='flex flex-col gap-5 relative justify-center items-center'>
        <InputBox onAmountChange={(e)=>setFrom(e.target.value)} currency={currency} myLabel="Amount" amount={from} allCurrency={allcurrency} onCurrencyChange={(e)=>setCurrency(e.target.value)}/>
        <InputBox onAmountChange={(e)=>{}} currency={toCurrency} myLabel="Converted Amount" amount={to} allCurrency={allcurrency} onCurrencyChange={(e)=>setToCurrency(e.target.value)} />
        <button className='absolute bg-blue-500 p-3 rounded-lg ' onClick={swap}>Swap</button>
        </div>
        <button className='w-100% p-2 bg-green-400 rounded-lg' onClick={convert}>Convert</button>
      </div>
      
    </div>
    </>
  )
}

export default App

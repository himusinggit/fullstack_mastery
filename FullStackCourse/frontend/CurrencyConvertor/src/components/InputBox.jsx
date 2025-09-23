import React from 'react'

function InputBox({myLabel,amount,allCurrency=[],onCurrencyChange,currency,onAmountChange}) {
    return (
        <>
        <div className='bg-gray-100 p-4 rounded-md flex gap-4 justify-between'>
        <div className='flex flex-col gap-3'>
            <label className='text-gray-500'>{myLabel}</label>
            <input type="number" value={amount} onChange={onAmountChange} />
        </div>
        <div className='flex flex-col gap-3'>
            <label className='text-gray-500'>Currency Type</label>
            <select onChange={onCurrencyChange} value={currency}>
                {allCurrency.map((cur)=>
                (
                    <option key={cur} value={cur}>{cur}</option>
                ))}
            </select>
        </div>
        </div>
        </>
    )
}

export default InputBox;

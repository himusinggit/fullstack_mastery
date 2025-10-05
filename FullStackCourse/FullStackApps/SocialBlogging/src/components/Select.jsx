import React,{useId} from 'react'

function Select({options,label,className='',ref,...props}) {
    const id=useId();
    return (
        
        <div>
                {label && (
                    <>
                    <label htmlFor={id}>{label}</label>
                    <select name="" id={id} ref={ref}>
                        {options?.map(option=>(
                            <option key={option}value={option}>{option}</option>
                        ))}
                    </select>
                    </>
                )}
        </div>
    )
}

export default Select

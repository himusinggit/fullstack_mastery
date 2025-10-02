import React,{useId} from 'react'

function InputBox({label,type='text',className='',ref,...props}) {
    const id=useId();
    return (
        <div>
            {label && (
                <div>
                    <label htmlFor={id}>{label}</label>
                    <input type={type} id={id} className={className} {...props} ref={ref} />
                </div>
            )}
        </div>
    )
}

export default InputBox

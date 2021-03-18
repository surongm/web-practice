import React from 'react'

const InputDemo = ({ value = '', onChange }) => {
    return (
        <div>
            <input value={value} onChange={onChange} />
        </div>
    )
}

export default InputDemo

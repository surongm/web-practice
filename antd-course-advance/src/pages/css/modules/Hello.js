import React from 'react'
import myStyles from './styles.css'
import './styles.css'

const Hello = () => {
    return (
        <div>
            <div className={myStyles.hello}>
                Hello World
            </div>
            <div className='world'>
                Hello World!
            </div>
        </div>
    )
}

export default Hello

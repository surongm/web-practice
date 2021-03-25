import React from 'react'
import myStyles from './styles.less'

const Hello = () => {
    return (
        <div>
            <div className={myStyles.hello}>
                <p className={myStyles.deleted}>
                    Hello World
                </p>
            </div>
        </div>
    )
}

export default Hello

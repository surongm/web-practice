import React from 'react'
import { FormattedMessage, formatMessage } from 'umi/locale'
// FormattedMessage——标签中使用, formatMessage——js逻辑中使用

const UmiLocale = () => {
    console.log(formatMessage({ id: 'helloworld' }))

    return (
        <div>
            <p><FormattedMessage id='helloworld' /></p>
            <p><FormattedMessage id='testmessage' /></p>
        </div>
    )
}

export default UmiLocale

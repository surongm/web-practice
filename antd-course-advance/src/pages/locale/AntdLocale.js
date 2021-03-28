import React from 'react'
import { DatePicker, LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'

const AntdLocale = () => {
    return (
        <LocaleProvider>
            <DatePicker />
        </LocaleProvider>
    )
}

export default AntdLocale

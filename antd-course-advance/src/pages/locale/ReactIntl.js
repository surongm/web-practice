import React from 'react'
import { DatePicker, LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { getLocale } from 'umi/locale'

import { FormattedMessage, IntlProvider, addLocaleData } from 'react-intl'
import zh from 'react-intl/locale-data/zh'
import en from 'react-intl/locale-data/en'

import Chinese from '../../locales/zh-CN'
import English from '../../locales/en-US'

// const messages = {
//     'helloworld': 'hello~'
// }

// const locale = this.props.intl.locale
// 引入这个方便切换语言
const locale = getLocale()
const messages = locale == 'zh-CN' ? Chinese : English

// 好像这个没啥用
// addLocaleData(zh, en)
// addLocaleData([...en, ...zh]);  // 引入多语言环境的数据 

export const ReactIntl = () => {
    return (
        // <IntlProvider locale='zh' messages={messages} >
        <IntlProvider locale={locale} messages={messages} >
            <LocaleProvider locale={zhCN} >
                <div>
                    <DatePicker />
                    <p><FormattedMessage id='helloworld' /></p>
                    <p><FormattedMessage id='testmessage' /></p>
                </div>
            </LocaleProvider>
        </IntlProvider>
    )
}

export default ReactIntl

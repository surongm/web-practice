import React, { Component } from 'react'
import { Button } from 'antd'
import { FormattedMessage, getLocale, setLocale } from 'umi/locale'

export default class GlobalHeader extends Component {
    changeLang = () => {
        const locale = getLocale()
        // console.log(locale)
        if (!locale || locale === 'zh-CN') {
            setLocale('en-US')
        } else {
            setLocale('zh-CN')
        }
    }

    render() {
        return (
            <Button
                size='small'
                onClick={() => this.changeLang()}
            >
                <FormattedMessage id='lang' />
            </Button>
        )
    }
}


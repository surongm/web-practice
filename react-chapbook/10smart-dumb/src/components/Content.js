import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

export default class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }

    render() {
        const { themeColor, onSwitchColor } = this.props
        return (
            <div>
                <p style={{ color: themeColor }}>
                    React.js 小书内容
                </p>
                <ThemeSwitch themeColor={themeColor} onSwitchColor={onSwitchColor} />
                {/* <ThemeSwitch {...this.props} /> */}
            </div>
        )
    }
}

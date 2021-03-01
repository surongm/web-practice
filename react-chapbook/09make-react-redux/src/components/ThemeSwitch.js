import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }

    handleSwitchColor(color) {
        const { onSwitchColor } = this.props
        if (onSwitchColor) {
            onSwitchColor(color)
        }
    }

    render() {
        const { themeColor } = this.props
        return (
            <div>
                <button
                    style={{ color: themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'red')}
                >
                    Red
                </button>
                <button
                    style={{ color: themeColor }}
                    onClick={() => this.handleSwitchColor('blue')}
                >
                    Blue
                </button>
            </div>
            // <div>
            //     <button
            //         style={{ color: 'red' }}
            //         onClick={this.handleSwitchColor.bind(this, 'red')}
            //     >
            //         Red
            //     </button>
            //     <button
            //         style={{ color: 'blue' }}
            //         onClick={() => this.handleSwitchColor('blue')}
            //     >
            //         Blue
            //     </button>
            // </div>
        )
    }
}

export default ThemeSwitch

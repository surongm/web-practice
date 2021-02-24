import React, { Component } from 'react'

export default (WrappedComponent, name) => {
    class NewComponent extends Component {
        constructor() {
            super()
            this.state = {
                data: null
            }
        }

        // componentDidMount() {
        //     ajax.get('/data/' + name, (data) => {
        //         this.setState({ data })
        //     })
        // }

        componentDidMount() {
            ajax.get('/data/' + this.props.data, (data) => {
                this.setState({ data })
            })
        }

        render() {
            return (
                <WrappedComponent data={this.state.data} />
            )
        }
    }
    return NewComponent
}


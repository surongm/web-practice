import React, { Component } from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default class MyTabs extends Component {
    state = {
        activeKey: '2'
    }

    onTabChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }

    render() {
        return (
            <div>
                <Tabs
                    activeKey={this.state.activeKey}
                    onChange={this.onTabChange}
                >
                    <TabPane tab="tab 1" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="tab 2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

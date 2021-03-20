import React, { Component } from 'react'
import { Card, Button } from "antd";
import { connect } from 'dva'

const namespace = 'puzzlecards'

// 获取到models里面的state
const mapStateToProps = (state) => {
    const cardList = state[namespace].cardList
    return {
        cardList
    }
}

// action 是一个对象
// dispatch 触发models里面的reducers 进而修改state
const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (newCard) => {
            const action = {
                type: `${namespace}/addNewCard`,
                payload: newCard
            }
            dispatch(action)

            // dispatch({
            //     type: `${namespace}/addNewCard`,
            //     payload: newCard
            // })
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCards extends Component {

    addNewCard = () => {
        const { onClickAdd } = this.props
        if (onClickAdd) {
            const newCard = {
                setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                punchline: 'here we use dva.',
            }
            onClickAdd(newCard)
        }
    }

    render() {
        // dva传进来的
        const { cardList } = this.props
        return (
            <div>
                {
                    cardList.map(card => {
                        return (
                            <Card key={card.id}>
                                <div>Q: {card.setup}</div>
                                <div>
                                    <strong>A: {card.punchline}</strong>
                                </div>
                            </Card>
                        )
                    })
                }
                <div>
                    <Button onClick={this.addNewCard}>
                        添加卡片
                    </Button>
                </div>
            </div>
        )
    }
}

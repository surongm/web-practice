import React, { Component } from 'react'
import { Card, Button } from "antd";

export default class PuzzleCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardList: [
                {
                    id: 1,
                    setup: 'Did you hear about the two silk worms in a race?',
                    punchline: 'It ended in a tie',
                },
                {
                    id: 2,
                    setup: 'What happens to a frog\'s car when it breaks down?',
                    punchline: 'It gets toad away',
                },
            ],
            // 为了定义id的临时变量
            counter: 100
        }
    }

    addNewCard = () => {
        const { cardList, counter } = this.state
        const card = {
            id: counter,
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        }

        this.setState({
            cardList: [...cardList, card],
            counter: counter + 1
        })

        // this.setState(prevState => {
        //     const prevCardList = prevState.cardList;
        //     const card = {
        //         id: this.state.counter,
        //         setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        //         punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        //     }
        //     return {
        //         cardList: prevCardList.concat(card),
        //         counter: this.state.counter + 1
        //     }
        // })
    }

    render() {
        const { cardList } = this.state

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

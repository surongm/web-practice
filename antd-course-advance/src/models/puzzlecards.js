export default {
    namespace: 'puzzlecards',

    state: {
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
            }
        ],
        counter: 100
    },

    // reducers里的方法 addNewCard——是action里面的type名称
    reducers: {
        addNewCard(state, { payload: newCard }) {
            const nextCounter = state.counter + 1
            const newCardWithId = { ...newCard, id: nextCounter }
            // const nextCardList = state.cardList.concat(newCardWithId)
            return {
                cardList: [...state.cardList, newCardWithId],
                counter: nextCounter
            }
        }
    }

}
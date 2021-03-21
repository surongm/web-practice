import request from '../utils/request'
import { message } from 'antd';

const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
};

export default {
    namespace: 'puzzlecards',

    state: {
        cardList: [],
        counter: 100
    },

    effects: {
        *queryInitCards(_, sagaEffects) {
            const { call, put } = sagaEffects

            // 代理前
            // 地址不可用
            // const endPointURL = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
            // 有100条数据
            // const endPointURL = 'http://jsonplaceholder.typicode.com/posts'
            // 第一个数据
            // const endPointURL = 'http://jsonplaceholder.typicode.com/posts/1'


            // 代理后
            // const endPointURL = '/dev/random_joke';
            // 这个用代理没数据
            // const endPointURL = '/posts/1'
            // 不知道为什么还需要dev才能请求到数据
            // const endPointURL = '/dev/posts/1'

            // mock
            const endPointURL = '/random_joke'

            // const puzzle = yield call(request, endPointURL)
            // yield put({
            //     type: 'addNewCard',
            //     payload: puzzle
            // })

            // yield call(delay, 3000)
            // const puzzle2 = yield call(request, endPointURL)
            // yield put({ type: 'addNewCard', payload: puzzle2 })

            // 模拟出错
            // const endPointURL = '/random_joke/500'

            // 加入 try catch 捕获抛错
            try {
                const puzzle = yield call(request, endPointURL)
                yield put({
                    type: 'addNewCard',
                    payload: puzzle
                })

                yield call(delay, 3000)
                const puzzle2 = yield call(request, endPointURL)
                yield put({ type: 'addNewCard', payload: puzzle2 })
            } catch (e) {
                message.error('数据获取失败')
            }
        }
    },

    // reducers里的方法 addNewCard——是action里面的type名称
    reducers: {
        // addNewCard(state, { payload: newCard }) {
        //     const nextCounter = state.counter + 1
        //     const newCardWithId = { ...newCard, id: nextCounter }
        //     // const nextCardList = state.cardList.concat(newCardWithId)
        //     return {
        //         cardList: [...state.cardList, newCardWithId],
        //         counter: nextCounter
        //     }
        // }

        // http://jsonplaceholder.typicode.com/
        addNewCard(state, { payload: newCard }) {
            // console.log(newCard)
            return {
                // 请求全部数据
                // cardList: [...state.cardList, ...newCard],
                // 请求某一条数据时
                cardList: [...state.cardList, newCard],
                // mock
                // cardList: [...newCard],
            }
        }
    }

}
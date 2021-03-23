import * as cardsService from '../services/cards'

export default {
    namespace: 'cards',

    state: {
        cardsList: [],
        statistic: {},
        statisticnoid: []
    },

    effects: {
        * queryList({ _ }, { call, put }) {
            const rsp = yield call(cardsService.queryList);
            console.log('queryList', rsp)
            yield put({
                type: 'saveList',
                payload: { cardsList: rsp.result }
            })
        },

        * deleteOne({ payload }, { call, put }) {
            const rsp = yield call(cardsService.deleteOne, payload)
            console.log('deleteOne', rsp)
            // 删除了重新请求一遍
            yield put({ type: 'queryList' })
            return rsp
        },

        * addOne({ payload }, { call, put }) {
            const rsp = yield call(cardsService.addOne, payload)
            // 增加了之后，重新查询一遍（得到最新的带有新增的数据）
            yield put({ type: 'queryList' })
            return rsp
        },

        // 处理图表
        * getStatistic({ payload }, { call, put }) {
            const rsp = yield call(cardsService.getStatistic, payload)
            yield put({
                type: 'saveStatistic',
                payload: { id: payload, data: rsp.result }
            })
            return rsp
        },

        // 处理图表
        * getStatisticNoId({ payload }, { call, put }) {
            const rsp = yield call(cardsService.getStatisticNoId, payload)
            yield put({
                type: 'saveStatisticNoId',
                payload: { data: rsp.result }
            })
            return rsp
        }
    },

    reducers: {
        saveList(state, { payload: { cardsList } }) {
            return {
                ...state,
                cardsList
            }
        },
        // 图表
        saveStatistic(state, { payload: { id, data } }) {
            return {
                ...state,
                statistic: {
                    ...state.saveStatistic,
                    [id]: data
                }
            }
        },

        // 图表
        saveStatisticNoId(state, { payload: { data } }) {
            return {
                ...state,
                statisticnoid: data
            }
        }
    }

}
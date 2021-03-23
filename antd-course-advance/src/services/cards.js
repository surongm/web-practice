import request from '../utils/request'

// 查询列表数据
export function queryList() {
    return request('/api/cards')
}

// 删除
export function deleteOne(id) {
    return request(`/api/cards/${id}`, {
        method: 'DELETE'
    })
}

// 增加一个 
export function addOne(data) {
    return request('/api/cards/add', {
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
}

// 请求图表数据
export function getStatistic(id) {
    return request(`/api/cards/${id}/statistic`)
}

// 请求图表数据
export function getStatisticNoId() {
    return request(`/api/cards/statisticnoid`)
}
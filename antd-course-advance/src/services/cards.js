import request from '../utils/request'

// 查询列表数据
export function queryList() {
    return request('/api/cards')
}

// 删除
export function deleteOne(id) {
    return reques(`/api/cards/${id}`, {
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

// 
export function getStatistic(id) {
    return request(`/api/cards/${id}/statistic`)
}

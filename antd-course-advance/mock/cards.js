let data = [
    {
        id: 1,
        name: 'umi',
        desc: '极快的类 Next.js 的 React 应用框架',
        url: 'https://umijs.org'
    },
    {
        id: 2,
        name: 'antd',
        desc: '一个服务于企业级产品的设计体系',
        url: 'https://ant.design/index-cn'
    },
    {
        id: 3,
        name: 'antd-pro',
        desc: '一个服务于企业级产品的设计体系',
        url: 'https://ant.design/index-cn'
    }
]

export default {
    // 加载list卡片数据
    'get /api/cards': (req, res, next) => {
        setTimeout(() => {
            res.json({
                result: data
            })
        }, 1000);
    },
    'delete /api/cards/:id': (req, res, next) => {
        data = data.filter(v => v.id !== parseInt(req.params.id));
        console.log(req.params, data)
        setTimeout(() => {
            res.json({
                success: true
            })
        }, 1000);
    },
    'post /api/cards/add': (req, res, next) => {
        data = [...data, {
            ...req.body,
            id: data[data.length - 1].id + 1
        }]
        res.json({
            success: true
        })
    },

    'get /api/cards/:id/statistic': (req, res, next) => {
        res, json({
            result: [
                {
                    genre: 'Sports',
                    sold: 275
                },
                {
                    genre: 'Strategy',
                    sold: 1150
                },
                {
                    genre: 'Action',
                    sold: 120
                },
                {
                    genre: 'Shooter',
                    sold: 350
                },
                {
                    genre: 'Other',
                    sold: 150
                },
            ]
        })
    }
}
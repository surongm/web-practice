export default {
    // singular: true, //设置文件目录为单数

    plugins: [
        ['umi-plugin-react', {
            antd: true,
        }]
    ],

    // 路由部分
    routes: [{
        path: '/',
        component: '../layouts',
        routes: [{
                path: '/',
                component: './HelloWorld'
            },
            {
                path: 'helloworld',
                component: './HelloWorld'
            },
            {
                path: '/dashboard',
                routes: [{
                        path: '/dashboard/analysis',
                        component: 'Dashboard/Analysis'
                    },
                    {
                        path: '/dashboard/monitor',
                        component: 'Dashboard/Monitor'
                    },
                    {
                        path: '/dashboard/workplace',
                        component: 'Dashboard/Workplace'
                    }
                ]
            }
        ]
    }]
};
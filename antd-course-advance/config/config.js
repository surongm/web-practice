export default {
    // singular: true, //设置文件目录为单数

    plugins: [
        ['umi-plugin-react', {
            // 引入antd
            antd: true,
            // 引入dva
            dva: true,
            // 启用国际化
            locale: {
                enable: true
            }
            // 这个antd 全局中文不起作用
            // locale: {
            //     enable: true,
            //     default: 'zh-CN',
            //     antd: true,
            //     title: false,
            //     baseNavigator: true,
            //     baseSeparator: '-',
            // }
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
        },
        {
            path: '/pazzlecards',
            component: 'puzzleCards'
        },
        {
            path: '/list',
            // /mylistnew ——/mylistnew (/表示根目录下)
            //  mylist——/list/mylist (没有/ 表示跟着父级)
            routes: [
                {
                    path: 'mylist',
                    component: 'myList'
                },
                {
                    path: '/list/mylistnew',
                    component: 'myList/myListNew'
                }
            ]
        },
        {
            path: '/charts',
            routes: [
                {
                    path: 'samplechart',
                    component: 'charts/SampleChart'
                },
                {
                    path: 'antdcharts',
                    component: 'charts/AntdCharts'
                }
            ]
        },
        {
            path: '/css',
            routes: [
                {
                    path: 'hello',
                    component: 'css/modules/Hello'
                },
                {
                    path: 'less',
                    component: 'css/less/Hello'
                },
                {
                    path: 'cover',
                    component: 'css/cover/CoverButton'
                },
            ]
        },
        {
            path: '/upload',
            routes: [
                {
                    path: 'antd',
                    component: 'upload'
                },
                {
                    path: 'js',
                    component: 'upload/UploadJs'
                },
                {
                    path: 'download',
                    component: 'upload/MyDownload'
                }
            ]
        },
        {
            path: '/locale',
            routes: [
                {
                    path: 'hello',
                    component: 'locale/Hello'
                },
                {
                    path: 'antdlocale',
                    component: 'locale/AntdLocale'
                },
                {
                    path: 'reactintl',
                    component: 'locale/ReactIntl'
                },
                {
                    path: 'umilocale',
                    component: 'locale/UmiLocale'
                },
            ]
        },
        {
            path: '/lifecycle',
            routes: [
                {
                    path: 'loadstage',
                    component: 'lifecycle/LoadStage'
                },
                {
                    path: 'updatestage',
                    component: 'lifecycle/UpdateStage'
                },
            ]
        },
        {
            path: '/authority',
            routes: [
                {
                    path: '/authority',
                    component: 'authority/'
                },
            ]
        },
        {
            path: '/testJest',
            routes: [
                {
                    path: '/testJest',
                    component: 'testJest/TestDemo'
                },
            ]
        },
        ]
    }],

    // 代理
    // proxy: {
    //     '/dev': {
    //         target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
    //         changeOrigin: true,
    //         pathRewrite: { "^/dev": "" }
    //     }
    // }
    proxy: {
        '/dev': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            // 请求地址忽略dev字段
            pathRewrite: { "^/dev": "" }
        }
    },

    // 更换主题
    // 若已有配置 —— 下面这句不加也行
    // outputPath: './bulid',
    theme: {
        '@primary-color': '#30b767' //绿色
    }
};
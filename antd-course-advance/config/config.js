export default {
    // singular: true, //设置文件目录为单数

    plugins: [
        ['umi-plugin-react', {
            antd: true,
        }]
    ],

    // 路由部分
    routes: [
        {
            path: '/',
            component: '../layouts',
            routes: [
                {
                    path: 'helloworld',
                    component: './HelloWorld'
                }
            ]
        }
    ]
};
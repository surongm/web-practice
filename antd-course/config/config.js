export default {
    singular: true, //设置文件目录为单数

    plugins: [
        ['umi-plugin-react', {
            antd: true,
        }]
    ],

    // 路由部分
    routes: [
        {
            path: '/',
            component: './HelloWorld' //相对于page(pages)下的文件
        },
        {
            path: '/myinput',
            component: './MyInput'
        },
        {
            path: '/mytabs',
            component: './MyTabs'
        },
        {
            path: '/mytree',
            component: './MyTree'
        },
    ]
};
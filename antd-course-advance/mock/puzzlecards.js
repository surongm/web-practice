const random_jokes = [
    {
        id: 1,
        title: 'What is the object oriented way to get wealthy ?',
        body: 'Inheritance',
    },
    {
        id: 2,
        title: 'To understand what recursion is...',
        body: "You must first understand what recursion is",
    },
    {
        id: 3,
        title: 'What do you call a factory that sells passable products?',
        body: 'A satisfactory',
    },
]

// 直接返回全部的数据
// export default {
//     'get /random_joke': (req, res) => {
//         setTimeout(() => {
//             res.json(random_jokes)
//         }, 3000)
//     }
// }

// 随机返回一条数据
// let random_joke_call_count = 0;

// export default {
//     'get /random_joke': (req, res) => {
//         const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
//         random_joke_call_count += 1;
//         setTimeout(() => {
//             res.json(responseObj);
//         }, 3000);
//     },
// };

// 模拟出错
// export default {
//     'get /random_joke/500': (req, res) => {
//         res.status(500)
//         res.json({})
//     }
// }

// mock 具备动态改变、延时返回等能力，如果你不需要这个能力，也可以简单地使用对象
// 简单数据模拟
export default {
    'get /random_joke': {
        id: '1',
        title: 'What is the object oriented way to get wealthy ?',
        body: 'Inheritance',
    },
};
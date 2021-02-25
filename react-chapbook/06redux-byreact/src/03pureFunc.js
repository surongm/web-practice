// 纯函数

// 1、函数的返回结果只依赖于它的参数

// 不是纯函数——依赖外部变量a，返回值不可预料
// let a = 1
// let foo = (b) => a + b
// foo(2)

// 是纯函数
// let a = 1
// let foo = (x, b) => x + b
// foo(1, 2)

// 2、函数执行过程没有副作用

// 是纯函数
// let a = 1
// let foo = (obj, b) => {
//     return obj.x + b
// }
// let counter = { x: 1 }
// foo(counter, 2)
// counter.x // =>1

// 不是纯函数——外部传进来的参数发生了改变
// let a = 1
// let foo = (obj, b) => {
//     obj.x = 2
//     return obj.x + b
// }
// let counter = { x: 1 }
// foo(counter, 2)
// counter.x // =>2

// 纯函数
let foo = (b) => {
    let obj = { x: 1 }
    obj.x = 2
    return obj.x + b
}
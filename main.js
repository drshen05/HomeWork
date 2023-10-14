// const user = {
//     daria: {
//         age: 18,
//         isAdmin: true,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }
// console.log(user.daria)
// user.daria.sayHello(`daria`)


const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: true
    },
    {
        name: 'masha',
        age: 19,
        isAdmin:false
    },
    {
        name: 'sasha',
        age: 20,
        isAdmin:true
    }
]
var quantity = 3
for(let i = 0; i < users.length; i++)
console.log(users[i].isAdmin + 1)
console.log(quantity)
let users = window.localStorage.getItem('users')
let foods = window.localStorage.getItem('foods')
let orders = window.localStorage.getItem('orders')






 users = JSON.parse(users) || [
    { userId: 1, username: 'Ali', contact: '9989110032505' },
    { userId: 2, username: 'Vali', contact: '99891100552' },
    { userId: 3, username: 'Laziza', contact: '998911002245' },
    { userId: 4, username: 'Alisher', contact: '998911005741' }
]

foods = JSON.parse(foods) || [
    { foodId: 1, foodname: 'burger cheese', foodImg: './img/burger_cheese.jpeg' },
    { foodId: 2, foodname: 'chicken togora', foodImg: './img/chicken_togora.jpeg' },
    { foodId: 3, foodname: 'chicken wings', foodImg: './img/chicken_wings.jpeg' },
    { foodId: 4, foodname: 'cola', foodImg: './img/cola.jpeg' },
    { foodId: 4, foodname: 'combo', foodImg: './img/combo.jpeg' },
    { foodId: 5, foodname: 'fanta', foodImg: './img/fanta.jpeg' },
    { foodId: 6, foodname: 'spinner', foodImg: './img/spinner.jpeg' },
]

orders = JSON.parse(orders) || [
    { userId: 1, foodId: 1, count: 2 },  // ali 2 ta burger
    { userId: 3, foodId: 6, count: 1 },  // laziza 1 ta spinder
    { userId: 2, foodId: 4, count: 3 }   // vali 3 ta cola
]
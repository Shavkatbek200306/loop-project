const customersList = document.querySelector('.customers-list')
const foodsSelect = document.querySelector('#foodsSelect')
const ordersList = document.querySelector('.orders-list')
const clientId = document.querySelector('#clientId')
const customerName = document.querySelector('#userHeader')
const userAdd = document.querySelector('#userAdd')
const usernameInput = document.querySelector('#usernameInput')
const telephoneInput = document.querySelector('#telephoneInput')
const foodsForm = document.querySelector('#foodsForm')
const foodsCount = document.querySelector('#foodsCount')


function renderUsers () {
    customersList.innerHTML = null
    for(let user of users){
        const [li, span, a] = createElement ('li','span', 'a')
        li.classList.add('customer-item')
        span.classList.add('customer-name')
        a.classList.add('customer-phone')

        a.setAttribute('href', 'tel:' + user.contact)
        span.textContent = user.username
        a.textContent = user.contact

        li.append(span,a)
        customersList.append(li)

        li.addEventListener('click', () => {
            renderOrders(user.userId)
            clientId.textContent = user.userId
            customerName.textContent = user.username
            // console.log('hello');
        })
    }

}

function renderFoods () {
    for(let food of foods){
        const [option] = createElement('option')
        option.value = food.foodId
        option.textContent = food.foodname
        foodsSelect.append(option)
    }
} 

function renderOrders (userId) {
    ordersList.innerHTML = null
    for(let order of orders){
        if(!(order.userId == userId)) continue
        const food = foods.find(el => el.foodId == order.foodId);

        const [liEl,imgEl,divEl,nameEl,countEl] = createElement('li','img', 'div', 'span', 'span')
        liEl.classList.add('order-item')
        nameEl.classList.add('order-name')
        countEl.classList.add('order-count')
        imgEl.setAttribute('src', food.foodImg)
        nameEl.textContent = food.foodname        
        countEl.textContent = order.count
        divEl.append(nameEl,countEl)
        liEl.append(imgEl,divEl)
        ordersList.append(liEl)

    }
} 

function addUser () {

} 
function addOrder (event) {
    event.preventDefault()

    const foodId = foodsSelect.value.trim()
    const count = foodsCount.value.trim()
    const userId = clientId.textContent.trim()

    if(
        !count ||
        +count > 10 ||
        !userId
    ) return

    const newOrder = {
        foodId,
        userId,
        count
    }
    orders.push(newOrder)
    return renderOrders(userId)

}

userAdd.addEventListener('submit', (event) => {
    event.preventDefault()

    const username = usernameInput.value.trim()
    const contact = telephoneInput.value.trim()

    if(!username || username.length > 30){
        return alert('Invalid Username')
    }

    if((/998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$/).test(contact)){
        return alert('Invalid Phone')
    }

    const newUser = {
        userId: users.length ? users[users.length -1].userId + 1 : 1,
        username: username,
        contact: contact
    }
    users.push(newUser)
    return renderUsers()

})
foodsForm.addEventListener('submit', addOrder)

// CRUD => create read update delete
renderUsers()
renderFoods()
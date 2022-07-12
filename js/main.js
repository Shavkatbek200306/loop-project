const customersList = document.querySelector('.customers-list')
function renderUsers () {
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

function renderOrders () {} 

function addUser () {} 
function addOrder () {}

// CRUD => create read update delete
renderUsers()
renderFoods()
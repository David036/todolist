let array = []
let title = document.createElement('h1')
title.classList.add('title')
document.body.append(title)
title.innerHTML = 'Please your details.'
let btn1 = document.createElement('button')
document.body.append(btn1)
btn1.classList.add('btn-1')
btn1.innerHTML = 'Add User'
let section = document.createElement('div')
document.body.append(section)
section.classList.add('section')
let bigModal = document.createElement('div')
bigModal.classList.add('big-modal')
document.body.append(bigModal)
let smallModal = document.createElement('div')
bigModal.append(smallModal)
smallModal.classList.add('small-modal')
smallModal.innerHTML = `
<input class="name-text" placeholder="Name" type="text" name="" id="">
        <input class="name-text" placeholder="Surname" type="text" name="" id="">
        <input class="name-text" placeholder="Age" type="number" name="" id="">
        <input class="name-text" placeholder="Email" type="email" name="" id="">
        <button class="btn-2">Add user</button> `
let input = document.querySelectorAll('.name-text')
let btn2 = document.querySelector('.btn-2')
btn1.addEventListener('click',()=> {
    bigModal.style.transform = 'translateY(0)'
    bigModal.addEventListener('click',(ev) => {
        ev.stopImmediatePropagation()
        if (ev.target == bigModal && ev.target != smallModal) {
            bigModal.style.transform = 'translateY(-100%)'
        }    
    })
})

btn2.addEventListener('click',()=> {
    let valName = input[0].value
let valSurname = input[1].value
let valAge = input[2].value
let valEmail = input[3].value

let user = {
    name: '',
    surname:'',
    age: '',
    email:'',
    important: false,
}
if (valName.length !==0 && valSurname.length !== 0 && valAge !==0 && valEmail !==0 ) { 
    user.name = valName
    user.surname = valSurname
    user.age = valAge
    user.email = valEmail
    array.push(user)  
    let userCard = document.createElement('div')
    userCard.classList.add('user-card')
    section.append(userCard)
    userCard.innerHTML = `
    <h3 class="card-name card-text"></h3>
            <h4 class="card-surname card-text"></h4>
            <h5 class="card-age card-text"></h5>
            <p class="card-email card-text"></p>
            <button class="remove">Remove</button>
            <button class="important">Important</important>
    `   
    let cardName = userCard.querySelector('.card-name')
    let cardSurname = userCard.querySelector('.card-surname')
    let cardAge = userCard.querySelector('.card-age')
    let cardEmail = userCard.querySelector('.card-email')
    cardName.innerHTML = user.name  
    cardSurname.innerHTML = user.surname
    cardAge.innerHTML = user.age
    cardEmail.innerHTML = user.email
    for (let i = 0; i < input.length; i++) {
        input[i].value = ''   
    }
    bigModal.style.transform = 'translateY(-100%)'
    let remove = userCard.querySelector('.remove')
    remove.addEventListener('click',()=> {
        userCard.remove()
    })
    let important = userCard.querySelector('.important')
    important.addEventListener('click',()=> {
        userCard.classList.toggle('user-card-active')
        important.classList.toggle('important-active')
        cardName.classList.toggle('card-name')
        cardName.classList.toggle('text-active-1')
        cardSurname.classList.toggle('card-surname')
        cardSurname.classList.toggle('text-active-2')
        cardAge.classList.toggle('card-age')
        cardAge.classList.toggle('text-active-3')
        cardEmail.classList.toggle('card-email')
        cardEmail.classList.toggle('text-active-4')
        remove.classList.toggle('remove')
        remove.classList.toggle('remove-active')
        if (user.important == false) {
            user.important = true   
        }else {
            user.important = false
        }
    })
    
} else {
    alert('Error')
}
    
})
// DOM Manipulation


// GetELementById()
const title = document.getElementById('main-heading')
console.log(title)

title.style.color='blue'

// GetELementByClassName()

const listItem = document.getElementsByClassName('list-item')
console.log(listItem)

// getElementsByTagName()

const listItem2 = document.getElementsByTagName('li')
console.log(listItem2)


// querySelector()
const container = document.querySelector('li')
console.log(container)

// querySelectorAll()

const itemList2 = document.querySelectorAll('.list-item')
for ( i=0; i< itemList2.length; i++)
{
    itemList2[i].style.fontSize = '3rem'

}
console.log(itemList2)

// creating Elements
const ul =document.querySelector('ul')
const li = document.createElement('li')
ul.append(li)

li.innerText='X-men'

// modifing attributes

li.setAttribute('id', 'main-heading') 
li.removeAttribute('id')

li.classList.add('list-item')
li.classList.remove('list-item')
console.log(li.classList.contains('list-item'))
//  Adding Element
//  Modifing the text

const firstListItem= document.querySelector('.list-item')
console.log(firstListItem.innerText)
console.log(firstListItem.textContent)
console.log(firstListItem.innerHTML)
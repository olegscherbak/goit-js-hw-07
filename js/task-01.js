const categori = document.querySelectorAll('h2');
const title = categori.length
console.log(`Количество категорий: ${title}`)
const item = document.querySelectorAll('#categories h2');
item.forEach(item => console.log(`Категория: ${item.textContent}, Количество: ${item.nextElementSibling.children.length}`))

// Свойство nextElementSibling содержит следующий элемент, находящийся в этом же родителе. Если такого элемента нет - возвращается null.




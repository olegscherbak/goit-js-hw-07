const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsItem = document.querySelector('#ingredients');
console.log(ingredientsItem);
const addIngredient = (array) => array.map(item => {
  const listItem = document.createElement('li')
  listItem.textContent = item
  return listItem
});
ingredientsItem.append(...addIngredient(ingredients))
console.log(ingredients);

// Метод createElement позволяет создать новый элемент, передав в параметре имя тега. После создания с элементом можно работать как с обычным элементом
// Метод append позволяет вставить в конец какого-либо другой элемент. Параметром метод принимает элемент, как правило созданный через createElement, либо строку.Можно добавить сразу несколько элементов или строк, перечислив их через запятую.
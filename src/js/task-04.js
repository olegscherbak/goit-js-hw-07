let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");
const decrement = () => (spanValue.textContent = counterValue -= 1);
const increment = () => (spanValue.textContent = counterValue += 1);
buttonDecrement.addEventListener("click", decrement);buttonIncrement.addEventListener("click", increment);
console.log(decrement);
console.log(increment);

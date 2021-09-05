const inputElement = document.querySelector('#name-output')
const outputElement = document.querySelector('#name-input')
outputElement.addEventListener('input', change);
function change(event) {
    let value = outputElement.value;
    if (value === "") {
        inputElement.textContent = "незнакомец";
    }
    else {inputElement.textContent = value
    }
}
// Метод addEventListener позволяет добавлять несколько обработчиков на одно событие одного элемента

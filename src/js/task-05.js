const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')
input.addEventListener('input', change);
function change(event) {
    let value = input.value;
    if (value === "") {
        input.textContent = "незнакомец";
    }
    else {output.textContent = value
    }
}
// Метод addEventListener позволяет добавлять несколько обработчиков на одно событие одного элемента

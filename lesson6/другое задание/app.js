const counterElement = document.querySelector('.input');
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');

let counterValue = 0;

function updateCounterDisplay() {
    counterElement.value = counterValue;

    if (counterValue > 0) {
        counterElement.style.color = '#4CAF50'; // Зеленый цвет
    } else if (counterValue < 0) {
        counterElement.style.color = '#f44336'; // Красный цвет
    } else {
        counterElement.style.color = '#808080'; // Серый цвет
    }
}

plusButton.addEventListener('click', function () {
    counterValue += 1;
    updateCounterDisplay();
});

minusButton.addEventListener('click', function () {
    counterValue -= 1;
    updateCounterDisplay();
});

updateCounterDisplay();
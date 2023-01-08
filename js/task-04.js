let counterValue = 0;
const decrementBnt = document.querySelector('[data-action="decrement"]');
const incrementBnt = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value")


decrementBnt.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

incrementBnt.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});
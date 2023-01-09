const inputNum = document.querySelector('#controls>input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNum.value);
  boxes.append(...boxesToAdd);
});

btnDestroy.addEventListener('click', () => {
  destroyBoxes.call();
});


const destroyBoxes = () => {
  boxes.innerHTML = '';
};

const createBoxes = amount => {
  const elementsToAdd = []
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
  
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
};
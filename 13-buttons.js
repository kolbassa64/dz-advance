const buttonContainer = document.createElement('div');
document.body.appendChild(buttonContainer);
buttonContainer.innerHTML = `
    <div id="buttons-container">
        <button class="button">Нажми меня</button>
        <button class="button">Нажми меня</button>
        <button class="button">Нажми меня</button>
        <button class="button">Нажми меня</button>
        <button class="button">Нажми меня</button>
    </div>
    <div id="counter">Количество нажатий: 0</div>
`;

const buttonsContainer = document.getElementById('buttons-container');
const counterElement = document.getElementById('counter');
let clickCount = 0;
let activeButton = null;

buttonsContainer.addEventListener('click', (event) => {
    const clickedButton = event.target;
    if (activeButton) {
        activeButton.textContent = 'Нажми меня';
        activeButton.classList.remove('active');
    }
    clickedButton.textContent = 'Нажата';
    activeButton = clickedButton;
    clickCount++;
    counterElement.textContent = `Количество нажатий: ${clickCount}`;
    })
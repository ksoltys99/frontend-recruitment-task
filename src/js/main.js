const button = document.querySelector('.info-container-button');
const modal = document.getElementById('modal');

const openModal = () => {
    modal.showModal();

    document.querySelector('.close-modal-btn').addEventListener('click', () => {
        modal.close();
    })

}

const buttonClickCounter = () => {
    let counter = 0;
    const getCounter = localStorage.getItem('buttonClickCounter');

    if(!isNaN(getCounter)) counter = getCounter;
    localStorage.setItem('buttonClickCounter', ++counter);

    const currentValue = parseInt(counter) + 1;

    updateCounterText(currentValue);   
    
    if(currentValue > 5) createClearButton();
}

const createClearButton = () => {
    const newButton = document.createElement('button');
    newButton.innerText = 'Clear';

    document.querySelector('.dialog-box').append(newButton);

    newButton.addEventListener('click', () => {
        localStorage.clear();
        updateCounterText(0);
    })
}

const updateCounterText = (value) => {
    document.querySelector('.click-counter-info').innerHTML = `You have clicked ${value} times to related button`;
}

button.addEventListener('click', () => {
    openModal();
    buttonClickCounter();
});

document.addEventListener('click', (ev) => {
    if(ev.target.outerHTML.startsWith('<dialog')) modal.close();
})
const showPopupBtn = document.querySelector('.info-container-button');
const modal = document.getElementById('modal');
const clearBtn = document.querySelector('.clear-button');

const openModal = () => {
    modal.showModal();

    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.close();
    })
}

const buttonClickCounter = () => {
    let counter = 0;
    const getCounter = localStorage.getItem('buttonClickCounter');

    if(!isNaN(getCounter) && getCounter!==null) counter = parseInt(getCounter);
    localStorage.setItem('buttonClickCounter', ++counter);

    updateCounterText(counter);   

    if(counter > 5) showClearButton();
}

const showClearButton = () => {
    clearBtn.classList.remove('invisible');
}

const updateCounterText = (value) => {
    document.querySelector('.click-counter-info').innerHTML = `You have clicked <b>${value} ${value === 1 ? `time` : `times`}</b> to related button`;
}

showPopupBtn.addEventListener('click', () => {
    openModal();
    buttonClickCounter();
});

clearBtn.addEventListener('click', () => {
    localStorage.clear();
    updateCounterText(0);
    clearBtn.classList.add('invisible');
})

document.addEventListener('click', (ev) => {
    if(ev.target.outerHTML.startsWith('<dialog')) {
        modal.close();
        clearBtn.classList.add('invisible');
    }
})
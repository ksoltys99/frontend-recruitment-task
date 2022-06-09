const button = document.querySelector('.info-container-button');
const modal = document.getElementById('modal');

const openModal = () => {
    modal.showModal();

    document.querySelector('.close-modal-btn').addEventListener('click', ()=>{
        modal.close();
    })
}

const buttonClickCounter = () => {
    let counter = 0;
    const getCounter = localStorage.getItem('buttonClickCounter');

    if(!isNaN(getCounter)) counter = getCounter;
    localStorage.setItem('buttonClickCounter', ++counter);
    
    console.log(counter);
}

button.addEventListener('click', () => {
    openModal();
    buttonClickCounter();
});
const modalBtn = document.querySelector('.more');

const modal = document.querySelector('.modal')

modalBtn.addEventListener('click' , () => {
    modal.classList.remove('hidden')
})

modal.addEventListener('click' , (event) => {
    const target = event.target 
    if (target.classList.contains('modal__close') || target.classList.contains('overlay')){
        modal.classList.add('hidden')
    }
})
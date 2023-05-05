const burger = document.querySelector('.humburger-menu');

const menuElem = document.querySelector('.menu');

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');

}

burger.addEventListener('click' , () => {
    toggleMenu();
})


const link = document.querySelectorAll('.menu-list__link');


link.forEach(linkItem => {
    linkItem.addEventListener('click' , () => {
        menuElem.classList.remove('menu-active');
        burger.classList.remove('humburger-menu-active');
    })
})



/*link.addEventListener('click' , () => {
    menuElem.classList.remove('menu-active');
    burger.classList.remove('humburger-menu-active');
})*/
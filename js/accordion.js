"use strict"
const btns = document.querySelectorAll('.feature__link');

const lists = document.querySelectorAll('.feature-sub')

const openTab = (tab , idx) => {
    tab.classList.add('feature__link_active')
    lists[idx].classList.remove('hidden')
}


const closeTab = (tab , idx) => {
    tab.classList.remove('feature__link_active')
    lists[idx].classList.add('hidden')
}

btns.forEach((item , index ) => {
    item.addEventListener('click' , () => {
        if (item.classList.contains('feature__link_active')){
            closeTab(item , index );
        } else {
            openTab(item , index );
        }
        // btns.forEach((item) => {
        //     item.classList.remove('feature__link_active')
        // })

        // item.classList.add('feature__link_active')

        // lists.forEach((listItem) => {
        //     listItem.classList.add('hidden')
        // })

        // lists[index].classList.remove('hidden')

        
    })
})



const modalAuth = new ModalAuth()
const slider = new Slider()

const tabs = Array.from(document.getElementsByClassName('tabs__list'))
const tabsValues = Array.from(document.getElementsByClassName('tabs__value'))
tabs.forEach(tab => {
    tab.addEventListener('click', ({target}) => {
        const id = +target.getAttribute('data-id')
        tabsValues.forEach(value => {
            const currentId = +value.getAttribute('data-id')
            if (currentId === id) value.classList.add('active')
            else value.classList.remove('active')
        })
    })
})

const nextList = Array.from(document.getElementsByClassName('steps__next'))
const stepsList = Array.from(document.getElementsByClassName('steps__item'))
nextList.forEach(next => {
    next.addEventListener('click', e => {
        const value = +e.target.getAttribute('data-next')
        for (let item of stepsList) {
            const nextEl = item.nextElementSibling
            if (+nextEl.getAttribute('data-next') === value + 1) {
                e.target.parentNode.classList.remove('active')
                nextEl.classList.add('active')
                break
            }

        }
    })
})

console.log('Pizza is all you knead!')

window.onload = () => {
    const showNav = document.querySelector('#show-nav')
    const hideNav = document.querySelector('#hide-nav')
    const aside = document.querySelector('aside')

    showNav.addEventListener('click', () => {
        aside.classList.toggle('show')
    })

    hideNav.addEventListener('click', () => {
        aside.classList.toggle('show')
    })
}
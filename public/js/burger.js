function toggleBurgerMenu() {
    const mobileLinks = document.querySelector('.header__mobile-links')
    mobileLinks.classList.toggle('header__mobile-links-active')
}

document.querySelectorAll('.header__mobile-link').forEach(mobileLink => {
    mobileLink.addEventListener('click', toggleBurgerMenu)
})

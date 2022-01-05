(function () {
    function toggleBurgerMenu() {
        const mobileLinks = document.querySelector('.header__mobile-links')
        mobileLinks.classList.toggle('header__mobile-links-active')
    }

    function toggleFaqQuestion(index) {
        const question = document.querySelectorAll('.faq__block2')[index]
        const button = document.querySelectorAll('.faq__button')[index]
        question.classList.toggle('faq__block2_active')
        button.classList.toggle('faq__button_active')
    }

    document.querySelectorAll('.faq__block').forEach((button, index) => {
        button.addEventListener('click', () => toggleFaqQuestion(index))
    })

    document.querySelectorAll('.header__mobile-link').forEach(mobileLink => {
        mobileLink.addEventListener('click', toggleBurgerMenu)
    })
    
    document.querySelectorAll('.header__burger').forEach(mobileLink => {
        mobileLink.addEventListener('click', toggleBurgerMenu)
    })
})()

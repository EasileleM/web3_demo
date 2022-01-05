(function () {
    function toggleBurgerMenu() {
        const mobileLinks = document.querySelector('.header__mobile-links')
        mobileLinks.classList.toggle('header__mobile-links-active')
    }

    let currentModal;

    function openModal(pageNumber) {
        currentModal = pageNumber
        document.querySelector(`.section-roadmap`).classList.remove('section-roadmap_active')
        document.querySelector(`.section-roadmap-${pageNumber}`).classList.add('section-roadmap_active')
    }

    function nextModal() {
        document.querySelector(`.section-roadmap-${currentModal}`).classList.remove('section-roadmap_active')
        currentModal = currentModal === 4 ? 1 : currentModal + 1
        document.querySelector(`.section-roadmap-${currentModal}`).classList.add('section-roadmap_active')
    }

    function closeModals() {
        document.querySelector(`.section-roadmap`).classList.add('section-roadmap_active')
        document.querySelectorAll(`.section-roadmap-modal`).forEach(modal => {
            modal.classList.remove('section-roadmap_active')
        })
    }

    document.querySelectorAll('.header__mobile-link').forEach(mobileLink => {
        mobileLink.addEventListener('click', toggleBurgerMenu)
    })
    
    document.querySelectorAll('.header__burger').forEach(mobileLink => {
        mobileLink.addEventListener('click', toggleBurgerMenu)
    })

    document.querySelectorAll('.section-roadmap__next-button').forEach(button => {
        button.addEventListener('click', nextModal)
    })

    document.querySelectorAll('.section-roadmap__close-button').forEach(button => {
        button.addEventListener('click', closeModals)
    })

    Object.keys(Array(4).fill(1)).forEach((_, index) => {
        document.querySelector(`.roadmap__quarter_${index + 1}`).addEventListener('click', () => openModal(index + 1))
    })
})()

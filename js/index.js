(function () {
    function mulberry32(a) {
        return function() {
          var t = a += 0x6D2B79F5;
          t = Math.imul(t ^ t >>> 15, t | 1);
          t ^= t + Math.imul(t ^ t >>> 7, t | 61);
          return ((t ^ t >>> 14) >>> 0) / 4294967296;
        }
    }

    const seed = 100

    const random = mulberry32(seed)

    function weightedRandom(max = 1, numDice = 4) {
        let num = 0;
        for (let i = 0; i < numDice; i++) {
            num += random() * (max/numDice);
        }    
        return num;
    }

    const STARS_AMOUNT = 200

    const MAX_STAR_ANIMATION_TIME = 1.5
    const MIN_STAR_ANIMATION_TIME = 0.5

    const MAX_STAR_ANIMATION_DELAY = 0.5
    const MIN_STAR_ANIMATION_DELAY = 0

    const MAX_STAR_SIZE = 8
    const MIN_STAR_SIZE = 6

    const AMOUNT_OF_STAR_TYPES = 10

    let rawStarPositions = []

    function normalizeXY(x, y, maxX, maxY) {
        return {
            x: `${x * maxX}px`,
            y: `${y * maxY}px`
        }
    }

    function initStars() {
        const wrapperElement = document.querySelector('.wrapper-home')
        const {clientHeight: wrapperHeight, clientWidth: wrapperWidth} = wrapperElement
        const stars = []
        for (let i = 0; i < STARS_AMOUNT; i++) {
            const positionRandom = i >= (STARS_AMOUNT / 5) ? weightedRandom : random

            const star = document.createElement('div')
            const rawX = positionRandom()
            const rawY = positionRandom()
            rawStarPositions.push([rawX, rawY])
            const {x, y} = normalizeXY(rawX, rawY, wrapperWidth, wrapperHeight)
            const animationTime = `${random() * (MAX_STAR_ANIMATION_TIME - MIN_STAR_ANIMATION_TIME) + MIN_STAR_ANIMATION_TIME}s`
            const animationDelay = `${random() * (MAX_STAR_ANIMATION_DELAY - MIN_STAR_ANIMATION_DELAY) + MIN_STAR_ANIMATION_DELAY}s`
            const starSizeRaw = random() * (MAX_STAR_SIZE - MIN_STAR_SIZE) + MIN_STAR_SIZE
            const starSize = `${starSizeRaw}px`
            const starType = Math.round(random() * (AMOUNT_OF_STAR_TYPES - 1) + 1)
            star.classList.add('home__star', `home__star_${starType}`)
            star.style.setProperty('animation-duration', animationTime);
            star.style.setProperty('animation-delay', animationDelay);
            star.style.setProperty('left', x)
            star.style.setProperty('top', y)
            star.style.setProperty('width', starSize)
            star.style.setProperty('height', starSize)
            star.setAttribute('data-rellax-speed', starSizeRaw / 2)
            stars.push(star)
        }
        wrapperElement.append(...stars)
        new Rellax('.home__star')
    }

    function placeStars([{contentRect: { height, width }}]) {
        document.querySelectorAll('.home__star').forEach((star, index) => {
            const [rawX, rawY] = rawStarPositions[index]
            const {x, y} = normalizeXY(rawX, rawY, width, height)
            star.style.setProperty('left', x)
            star.style.setProperty('top', y)
        })
    }

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

    new Rellax('.home__stars-static')
    initStars()
    let initialResizeObserveTriggered = false

    const resizeObserver = new ResizeObserver((entries) => {
        if (initialResizeObserveTriggered) {
            placeStars(entries)
        } else {
            initialResizeObserveTriggered = true
        }
    });

    resizeObserver.observe(document.querySelector('.wrapper-home'));
})()

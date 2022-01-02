(function () {
    const isLoginPage = window.location.href.includes('login')

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

    const STARS_AMOUNT = 100

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
        const wrapperElement = document.querySelector(isLoginPage ? '.wrapper-login' : '.wrapper-home')
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
        if (!isLoginPage) {
            new Rellax('.home__star')
        }
    }

    function placeStars([{contentRect: { height, width }}]) {
        document.querySelectorAll('.home__star').forEach((star, index) => {
            const [rawX, rawY] = rawStarPositions[index]
            const {x, y} = normalizeXY(rawX, rawY, width, height)
            star.style.setProperty('left', x)
            star.style.setProperty('top', y)
        })
    }

    if (!isLoginPage) {
        new Rellax('.home__stars-static')
    }
    initStars()
    let initialResizeObserveTriggered = false

    const resizeObserver = new ResizeObserver((entries) => {
        if (initialResizeObserveTriggered) {
            placeStars(entries)
        } else {
            initialResizeObserveTriggered = true
        }
    });

    resizeObserver.observe(document.querySelector(isLoginPage ? '.wrapper-login' : '.wrapper-home'));
})()

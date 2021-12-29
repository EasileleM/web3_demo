(function () {
    const accountName = localStorage.getItem('accountName')
    let currentPage = 0
    let isLoading = false
    let loadedAll = false

    const COLLECTION_NAME = 'econimicafuk'
    const MAX_CARD_PER_PAGE = 8

    const ASSETS_CONTAINTER_SELECTOR = '#assetsContainer'
    const LOAD_MORE_BUTTON_SELECTOR = '#loadMore'
    const LOGOUT_BUTTON_SELECTOR = '#logout'
    const ACCOUNT_NAME_SELECTOR = '#accountName'

    function getAssetsUrl(currentPage) {
        return `https://wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=${COLLECTION_NAME}&owner=${accountName}&page=${currentPage}&limit=${MAX_CARD_PER_PAGE}&order=desc&sort=asset_id`
    }

    function getImageUrl(imgPath) {
        return `https://ipfs.atomichub.io/ipfs/${imgPath}`
    }

    function createElementFromHTML(html) {
        var div = document.createElement('div');
        div.innerHTML = html.trim();

        return div.firstChild; 
    }

    function assetHtml(asset) {
        return `
            <div class="asset">
                <div class="asset__imageblock">
                <img class="asset__image" src="${getImageUrl(asset.img)}" />
                </div>
                <div class="asset__textblock">
                <p class="asset__name">${asset.name}</p>
                </div>
            </div>
        `
    }

    function noItemsHtml() {
        return `
            <div class="noItemsMessage">
                You have no items at the moment!
            </div>
        `
    }

    function renderAssets(assets) {
        document.querySelector(ASSETS_CONTAINTER_SELECTOR).append(
            ...assets.map((asset) => createElementFromHTML(assetHtml(asset)))
        )
    }

    function renderNoItemsMessage() {
        document.querySelector(ASSETS_CONTAINTER_SELECTOR).replaceChildren(createElementFromHTML(noItemsHtml()))
    }

    async function fetchAssets(currentPage) {
        try {
            const response = await fetch(getAssetsUrl(currentPage))
            const { data } = await response.json()
            const result = data.map(({ data }) => data)

            return result
        } catch {
            return []
        }
    }

    function isLoadingState() {
        isLoading = true
        document.querySelector(LOAD_MORE_BUTTON_SELECTOR).disabled = true
    }

    function isNotLoadingState() {
        isLoading = false
        const loadMoreButton = document.querySelector(LOAD_MORE_BUTTON_SELECTOR)
        if (loadMoreButton) {
            loadMoreButton.disabled = false
        }
    }

    async function loadMore() {
        if (loadedAll || isLoading) {
            return
        }
        try {
            isLoadingState()
            currentPage++
            const assets = await fetchAssets(currentPage)

            if (assets.length < MAX_CARD_PER_PAGE) {
                loadedAll = true
                document.querySelector(LOAD_MORE_BUTTON_SELECTOR).remove()

                if (assets.length === 0 && currentPage === 1) {
                    renderNoItemsMessage()
                }
            }

            renderAssets(assets)
        } finally {
            isNotLoadingState()
        }
    }

    async function logout() {
        localStorage.removeItem('accountName')
        window.location.replace('/login')
    }

    if (accountName) {
        document.querySelector(LOAD_MORE_BUTTON_SELECTOR).addEventListener('click', loadMore)
        document.querySelector(LOGOUT_BUTTON_SELECTOR).addEventListener('click', logout)
        document.querySelector(ACCOUNT_NAME_SELECTOR).innerHTML = accountName
        document.querySelector(ACCOUNT_NAME_SELECTOR).href = `https://wax.atomichub.io/explorer/account/${accountName}`
        loadMore()
    } else {
        window.location.replace('/login')
    }
})()

